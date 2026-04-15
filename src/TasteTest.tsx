import { useCallback, useMemo } from "react";
import "./TasteTest.css";

export type AnalysisLogEntry = {
  time: string;
  lineId: string;
  tag?: string;
  body: string;
};

/** Placeholder entries until an API / model returns a live roast. */
export const MOCK_ANALYSIS_ENTRIES: readonly AnalysisLogEntry[] = [
  { time: "[0.00s]", lineId: "L-01", body: "// channel opened — UTF-8 verified" },
  {
    time: "[0.08s]",
    lineId: "L-02",
    tag: "CRITICAL CRINGE",
    body: "Detecting the phrase \"Self-motivated visionary.\"",
  },
  {
    time: "[0.14s]",
    lineId: "L-03",
    tag: "WARNING",
    body: "Detecting \"Increased synergy by 400%.\"",
  },
  {
    time: "[0.20s]",
    lineId: "L-04",
    tag: "MINOR OFFENSE",
    body: "Finding \"Traveling\" in the hobby section.",
  },
  {
    time: "[0.26s]",
    lineId: "L-05",
    tag: "SEVERE ERROR",
    body: "Using proficiency bars for \"Creativity.\"",
  },
  {
    time: "[0.31s]",
    lineId: "L-06",
    tag: "ADVISORY",
    body: "Detecting the use of \"Comic Sans\" in the name field.",
  },
];

export function formatAnalysisLogPlain(entries: readonly AnalysisLogEntry[]): string {
  return entries
    .map((row) => {
      const tag = row.tag ? `${row.tag}: ` : "";
      return `${row.time} ${row.lineId}: ${tag}${row.body}`;
    })
    .join("\n");
}

/** Plain multiline string for downloads / tests. */
export const MOCK_ANALYSIS_LOG = formatAnalysisLogPlain(MOCK_ANALYSIS_ENTRIES);

type TasteTestProps = {
  logCleared: boolean;
  onClearBuffer: () => void;
  onReinitiateScan: () => void;
};

export default function TasteTest(props: TasteTestProps) {
  const { logCleared, onClearBuffer, onReinitiateScan } = props;

  const exportBody = useMemo(() => formatAnalysisLogPlain(MOCK_ANALYSIS_ENTRIES), []);

  const onExport = useCallback((): void => {
    const blob = new Blob([exportBody], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "analysis_log.txt";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [exportBody]);

  return (
    <div className="taste-page">
      <div className="taste-hero-row">
        <div className="taste-hero-text">
          <h1 className="taste-title">
            <span className="taste-title-part taste-title-part--white">TASTE</span>
            <span className="taste-title-part taste-title-part--red"> TEST</span>
          </h1>
          <div className="taste-sub">JUDGMENT PROTOCOL: ACTIVE // RESUME SCAN COMPLETE</div>
        </div>
        <button type="button" className="taste-export" onClick={onExport}>
          <svg
            className="taste-export-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M12 4v10M8 12l4 4 4-4M6 20h12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
          EXPORT ANALYSIS
        </button>
      </div>

      <div className="taste-hero-rule" aria-hidden />

      <div className="taste-grid">
        <div className="taste-metric-panel">
          <div className="taste-score-block">
            <div className="taste-score-value">82</div>
            <div className="taste-score-label">FATAL LEVEL</div>
          </div>

          <div className="taste-severity-block">
            <div className="taste-severity-head">OVERALL SEVERITY</div>
            <div className="taste-severity-row">
              <div className="taste-severity-track" aria-hidden>
                <div className="taste-severity-fill" />
                <div className="taste-severity-remainder" />
              </div>
              <span className="taste-severity-tag">HIGH</span>
            </div>
          </div>

          <div className="taste-advisory">
            <p className="taste-advisory-body">
              <span className="taste-advisory-lead">SYSTEM ADVISORY:</span> Resume contains critical levels of
              &quot;Synergy&quot;, &quot;Thought Leader&quot;, and excessive use of bullet points. Recommend immediate
              incineration.
            </p>
          </div>
        </div>

        <div className="taste-log-panel">
          <div className="taste-log-head">
            <span className="taste-log-filename">ANALYSIS_LOG.TXT</span>
            <span className="taste-log-meta">UTF-8 // RAW_OUTPUT</span>
          </div>
          {logCleared ? (
            <div className="taste-log-body taste-log-body--empty">BUFFER CLEARED // NO LINES IN QUEUE</div>
          ) : (
            <div className="taste-log-body">
              {MOCK_ANALYSIS_ENTRIES.map((row, i) => (
                <div key={`${row.lineId}-${i}`} className="taste-log-line">
                  <span className="taste-log-ts">{row.time}</span>
                  <span className="taste-log-id">{row.lineId}:</span>
                  {row.tag ? (
                    <>
                      <span className="taste-log-pill">{row.tag}:</span>
                      <span className="taste-log-detail">{row.body}</span>
                    </>
                  ) : (
                    <span className="taste-log-detail taste-log-detail--solo">{row.body}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="taste-actions">
        <button type="button" className="btn btn-primary" onClick={onReinitiateScan}>
          RE-INITIATE SCAN
        </button>
        <button type="button" className="btn btn-ghost" onClick={onClearBuffer}>
          CLEAR BUFFER
        </button>
      </div>

      <section className="bottom taste-bottom" aria-label="Module footnotes">
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
    </div>
  );
}
