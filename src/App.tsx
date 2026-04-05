import { useCallback, useRef, useState } from "react";
import "./App.css";

const ROAST_LABELS = ["MILD", "BITTER", "FERMENTED", "ATOMIC"] as const;
const ROAST_DISPLAY = ["02", "05", "07", "11"] as const;
const ROAST_MAX = ROAST_LABELS.length - 1;

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

function UploadDocumentIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden>
      <rect x="8" y="6" width="40" height="44" fill="var(--red)" />
      <path
        d="M28 18 L28 34 M22 28 L28 22 L34 28"
        stroke="#000"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
    </svg>
  );
}

export default function App() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [roastIndex, setRoastIndex] = useState(2);

  const displayNumber = ROAST_DISPLAY[roastIndex] ?? "07";
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
    setRoastIndex(2);
  };

  return (
    <>
      <div className="bg-scanlines" aria-hidden />
      <div className="app-shell">
        <header className="topbar">
          <div className="brand">
            <img
              className="brand-logo"
              src="/logo_borscht.svg"
              alt="Borscht"
              width={186}
              height={40}
              decoding="async"
            />
          </div>
          <nav className="topnav" aria-label="Primary">
            <a className="topnav-link is-active" href="#pot">
              THE POT
            </a>
            <a className="topnav-link" href="#cringe-index">
              CRINGE INDEX
            </a>
            <a className="topnav-link" href="#kitchen">
              THE KITCHEN
            </a>
            <a className="topnav-link" href="#settings">
              SETTINGS
            </a>
          </nav>
          <div className="topbar-right" aria-hidden>
            <div className="status-glyph" />
          </div>
        </header>

        <main className="main">
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
                  <UploadDocumentIcon />
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
                  aria-valuetext={`${ROAST_LABELS[roastIndex]}, module readout ${displayNumber}`}
                  onChange={(e) => {
                    setRoastIndex(Number(e.target.value));
                  }}
                />
                <div className="roast-labels">
                  {ROAST_LABELS.map((label, i) => (
                    <span
                      key={label}
                      className={[
                        "roast-label",
                        i === roastIndex ? "is-active" : "",
                        i === roastIndex && label === "ATOMIC" ? "is-atomic" : "",
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
                <span className="panel-icon" aria-hidden />
                SYSTEM LOAD
              </div>
              <div className="panel-text">
                High-consequence data processing active. Avoid terminal closure during judgment phase.
              </div>
            </article>
            <article className="panel">
              <div className="panel-topline" aria-hidden />
              <div className="panel-title">
                <span className="panel-icon" aria-hidden />
                SOVEREIGNTY
              </div>
              <div className="panel-text">
                Your data is shredded and fermented locally. No cloud sync. No mercy. No leaks.
              </div>
            </article>
            <article className="panel">
              <div className="panel-topline" aria-hidden />
              <div className="panel-title">
                <span className="panel-icon" aria-hidden />
                CRINGE LOGS
              </div>
              <div className="panel-text">
                Last judgment: 14.02.1984. Result: UNRECOVERABLE. Severity: NUCLEAR.
              </div>
            </article>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-text">
            BORSCHT SYSTEM V0.0.5 // (C) 1984 CULT_OF_SOUP // ALL RIGHTS VOID
          </div>
        </footer>
      </div>
    </>
  );
}
