import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import SideNav, { type NavId } from "./SideNav";
import TasteTest from "./TasteTest";

/** Slider has 10 stops (0–9). Five anchor labels map to heat tiers (mildest → hottest). */
const ROAST_ANCHOR_LABELS = [
  "Bell Pepper",
  "Habanero",
  "Ghost Pepper",
  "Carolina Reaper",
  "Pure Capsaicin",
] as const;
const ROAST_TIER_COUNT = ROAST_ANCHOR_LABELS.length;
/** Inclusive max index; `max` on range input = 9 → ten positions. */
const ROAST_MAX = 9;

function roastTierIndex(index: number): number {
  return Math.min(
    Math.floor((index * ROAST_TIER_COUNT) / (ROAST_MAX + 1)),
    ROAST_TIER_COUNT - 1,
  );
}

/** Watermark readout 01–10, one per slider stop. */
function roastDisplayNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

function formatBytes(bytes: number): string {
  const units = ["B", "KB", "MB", "GB"] as const;
  let v = bytes;
  let i = 0;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i++;
  }
  const fixed = i === 0 ? 0 : 1;
  return `${v.toFixed(fixed)} ${units[i]}`;
}


export default function App() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [roastIndex, setRoastIndex] = useState(7);
  const [activeNav, setActiveNav] = useState<NavId>("pot");
  const [tasteLogCleared, setTasteLogCleared] = useState(false);

  useEffect(() => {
    if (activeNav === "taste") {
      setTasteLogCleared(false);
    }
  }, [activeNav]);

  const displayNumber = roastDisplayNumber(roastIndex);
  const activeTier = roastTierIndex(roastIndex);
  const openPicker = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] ?? null;
    setSelectedFile(file);
    if (!file) {
      setUploadStatus("");
      return;
    }
    setUploadStatus(`INTAKE // ${file.name} // ${formatBytes(file.size)}`);
  };

  const onPurge = (): void => {
    if (!selectedFile) {
      setUploadStatus("NO DATA // FEED THE BEET FIRST.");
      return;
    }
    setUploadStatus("PURGE INITIATED // AWAIT JUDGMENT.");
    setRoastIndex(ROAST_MAX);
  };

  const onClear = (): void => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setUploadStatus("BUFFER CLEARED.");
    setRoastIndex(7);
  };

  return (
    <>
      <div className="bg-grid" aria-hidden />
      <div className="bg-scanlines" aria-hidden />
      <div className="app-shell">
        <Header />

        <div className="app-body">
          <SideNav active={activeNav} onSelect={setActiveNav} />

          <div className="app-content">
            <main className="main">
            {activeNav === "pot" ? (
              <>
                <section className="hero">
                  <h1 className="hero-title">
                    <span className="hero-title-white">DROP THE EVIDENCE.</span>
                    <span className="hero-title-red">PREPARE FOR SOUR</span>
                    <span className="hero-title-red hero-title-last">JUDGMENT.</span>
                  </h1>
                  <div className="hero-sub">SYSTEM READY // WAITING FOR INPUT PROTOCOL</div>
                </section>

                <section className="upload-section">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="application/pdf,image/jpeg,.pdf,.jpg,.jpeg"
                    hidden
                    onChange={onFileChange}
                  />

                  <div
                    className="upload-outer"
                    role="button"
                    tabIndex={0}
                    onClick={openPicker}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openPicker();
                      }
                    }}
                  >
                    <span className="corner-square corner-tl" />
                    <span className="corner-square corner-tr" />
                    <span className="corner-square corner-bl" />
                    <span className="corner-square corner-br" />
                    <div className="upload-inner">
                      <div className="upload-icon-wrap">
                        <img src="/add_file.svg" alt="Add file" width={56} height={56} />
                      </div>
                      <div className="upload-title">FEED THE BEET</div>
                      <div className="upload-sub">
                        PDF, JPEG, RAW DATA ONLY. MAXIMUM 50MB PER INTAKE.
                      </div>
                      <div className="upload-status" aria-live="polite">
                        {uploadStatus}
                      </div>
                    </div>
                  </div>

                  <div className="roast-module" aria-label="Roast level">
                    <div className="roast-head">
                      <div className="roast-head-text">
                        <div className="roast-kicker">MODULE SETTING</div>
                        <div className="roast-title">ROAST LEVEL</div>
                      </div>
                      <span className="roast-watermark" aria-hidden>
                        {displayNumber}
                      </span>
                    </div>
                    <div className="roast-slider">
                      <label className="roast-range-label visually-hidden" htmlFor="roast-range-input">
                        Roast level
                      </label>
                      <input
                        id="roast-range-input"
                        className="roast-range"
                        type="range"
                        min={0}
                        max={ROAST_MAX}
                        step={1}
                        value={roastIndex}
                        aria-valuetext={`${ROAST_ANCHOR_LABELS[activeTier]}, module readout ${displayNumber}`}
                        onChange={(e) => {
                          setRoastIndex(Number(e.target.value));
                        }}
                      />
                      <div className="roast-labels">
                        {ROAST_ANCHOR_LABELS.map((label, i) => (
                          <span
                            key={label}
                            className={[
                              "roast-label",
                              i === activeTier ? "is-active" : "",
                              i === activeTier && i === ROAST_TIER_COUNT - 1 ? "is-atomic" : "",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="buttons">
                    <button type="button" className="btn btn-primary" onClick={onPurge}>
                      INITIATE PURGE
                    </button>
                    <button type="button" className="btn btn-ghost" onClick={onClear}>
                      CLEAR BUFFER
                    </button>
                  </div>
                </section>

                <section className="bottom">
                  <article className="panel">
                    <div className="panel-topline" aria-hidden />
                    <div className="panel-title">
                      <img className="panel-icon" src="/stats.svg" alt="" width={18} height={18} />
                      SYSTEM LOAD
                    </div>
                    <div className="panel-text">
                      High-consequence data processing active. Avoid terminal closure during judgment phase.
                    </div>
                  </article>
                  <article className="panel">
                    <div className="panel-topline" aria-hidden />
                    <div className="panel-title">
                      <img className="panel-icon" src="/shield.svg" alt="" width={18} height={18} />
                      SOVEREIGNTY
                    </div>
                    <div className="panel-text">
                      Your data is shredded and fermented locally. No cloud sync. No mercy. No leaks.
                    </div>
                  </article>
                  <article className="panel">
                    <div className="panel-topline" aria-hidden />
                    <div className="panel-title">
                      <img className="panel-icon" src="/repeat.svg" alt="" width={18} height={18} />
                      TASTE LOGS
                    </div>
                    <div className="panel-text">
                      Last judgment: 14.02.1984. Result: UNRECOVERABLE. Severity: NUCLEAR.
                    </div>
                  </article>
                </section>
              </>
            ) : activeNav === "taste" ? (
              <TasteTest
                logCleared={tasteLogCleared}
                onClearBuffer={() => setTasteLogCleared(true)}
                onReinitiateScan={() => setActiveNav("pot")}
              />
            ) : (
              <section className="placeholder">
                <div className="placeholder-kicker">MODULE</div>
                <div className="placeholder-title">
                  {activeNav === "kitchen" ? "THE KITCHEN" : "SETTINGS"}
                </div>
                <div className="placeholder-sub">NOT WIRED YET // PLACEHOLDER INTERFACE</div>
              </section>
            )}
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
