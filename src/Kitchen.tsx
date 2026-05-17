import { useState } from "react";
import "./Kitchen.css";

export default function Kitchen() {
  const [chefInput, setChefInput] = useState("");

  return (
    <div className="kitchen-page">

      {/* Mission bar */}
      <div className="kitchen-mission-bar">
        <span className="kitchen-mission-badge">MISSION OBJECTIVE</span>
        <span className="kitchen-mission-sep" aria-hidden />
        <span className="kitchen-mission-target">
          TARGET POSITION: SENIOR LEAD ENGINEER @ NEURAL-LINK CORP
        </span>
        <button type="button" className="kitchen-view-jd">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
            <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="2" />
          </svg>
          VIEW JD
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
          </svg>
        </button>
      </div>

      {/* Two-column workspace */}
      <div className="kitchen-workspace">

        {/* Document editor */}
        <div className="kitchen-editor">
          <div className="kitchen-editor-header">
            <div className="kitchen-file-name">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
              </svg>
              RESUME_MAIN_V4.MD
            </div>
            <div className="kitchen-editor-actions">
              <button type="button" className="kitchen-save-btn">SAVE</button>
              <button type="button" className="kitchen-export-btn">EXPORT PDF</button>
            </div>
          </div>

          <div className="kitchen-document">
            <div className="kitchen-doc-name">ALEXANDER VORONIN</div>
            <div className="kitchen-doc-role">SYSTEM ARCHITECT &amp; PROTOCOL ENGINEER</div>
            <div className="kitchen-doc-rule" />

            <div className="kitchen-doc-section">
              <div className="kitchen-section-heading">EXECUTIVE SUMMARY</div>
              <div className="kitchen-summary-box">
                <em>
                  "Engineering resilient distributed systems with a focus on low-latency data pipelines
                  and sovereign identity protocols. Veteran of four major hardware-software integrations
                  in the defense sector."
                </em>
              </div>
            </div>

            <div className="kitchen-doc-section">
              <div className="kitchen-section-heading">OPERATIONAL EXPERIENCE</div>

              <div className="kitchen-job-entry">
                <div className="kitchen-job-row">
                  <span className="kitchen-job-company">TITAN INFRASTRUCTURE</span>
                  <span className="kitchen-job-dates">2019 — PRESENT</span>
                </div>
                <div className="kitchen-job-title">LEAD PROTOCOL ENGINEER</div>
                <ul className="kitchen-job-bullets">
                  <li>Optimized Rust-based microservices architecture, reducing latency by 42%.</li>
                  <li>Engineered redundant failover protocols for mission-critical grid monitoring.</li>
                  <li>Managed a team of 12 tactical developers across 3 time zones.</li>
                </ul>
              </div>

              <div className="kitchen-job-entry kitchen-job-entry--muted">
                <div className="kitchen-job-row">
                  <span className="kitchen-job-company">GHOST NETWORK SYSTEMS</span>
                  <span className="kitchen-job-dates">2015 — 2019</span>
                </div>
                <div className="kitchen-job-title">SECURITY RESEARCHER</div>
                <div className="kitchen-job-truncated">
                  Encrypted data streams for high-consequence environments...
                </div>
              </div>
            </div>

            <div className="kitchen-doc-section">
              <div className="kitchen-section-heading">TECHNICAL TOOLKIT</div>
              <div className="kitchen-toolkit-grid">
                <div className="kitchen-toolkit-cell">LANGUAGES: RUST, C++, GO, ASSEMBLY</div>
                <div className="kitchen-toolkit-cell">SYSTEMS: KUBERNETES, LINUX KERNEL, DOCKER</div>
                <div className="kitchen-toolkit-cell">SECURITY: AES-25G, ZERO-KNOWLEDGE PROOFS</div>
                <div className="kitchen-toolkit-cell">HARDWARE: FPGA, RISC-V ARCHITECTURE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Chef panel */}
        <aside className="kitchen-chef-panel" aria-label="Terminal Chef">
          <div className="kitchen-chef-header">
            <div className="kitchen-chef-icon" aria-hidden>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M3 11l19-9-9 19-2-8-8-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
            </div>
            <div>
              <div className="kitchen-chef-title">TERMINAL CHEF</div>
              <div className="kitchen-chef-status">OPTIMIZING CONTENT...</div>
            </div>
          </div>

          <div className="kitchen-chef-feed">

            <div className="kitchen-chef-card">
              <div className="kitchen-card-id">CHEFS_NOTE_01</div>
              <p className="kitchen-card-body">
                I've analyzed the Job Description for{" "}
                <span className="kitchen-card-highlight">Senior Lead Engineer</span>. Your current
                executive summary is too passive. You need more 'Industrial Force'.
              </p>
              <p className="kitchen-card-body">
                Suggested Revision: Replace "Engineering resilient distributed systems" with
                "Architecting high-consequence computational grids for zero-fail environments."
              </p>
              <div className="kitchen-card-actions">
                <button type="button" className="kitchen-apply-btn">APPLY CHANGE</button>
                <button type="button" className="kitchen-ignore-btn">IGNORE</button>
              </div>
            </div>

            <div className="kitchen-user-msg">
              <div className="kitchen-user-label">COMMANDER_VORONIN</div>
              <div className="kitchen-user-text">
                Understood. Make the technical toolkit section more aggressive. Add my experience
                with FPGA protocols.
              </div>
            </div>

            <div className="kitchen-chef-card">
              <div className="kitchen-card-id">CHEFS_ANALYSIS_02</div>
              <div className="kitchen-match-row">
                <span className="kitchen-match-label">MATCH SCORE</span>
                <span className="kitchen-match-value">84%</span>
              </div>
              <div className="kitchen-match-track">
                <div className="kitchen-match-fill" style={{ width: "84%" }} />
              </div>
              <p className="kitchen-card-body">
                Injecting{" "}
                <span className="kitchen-card-link">FPGA Latency Mitigation</span> into your
                experience at Titan Infrastructure. This will trigger the Neural-Link automated
                screening protocols.
              </p>
            </div>

          </div>

          <div className="kitchen-chef-composer">
            <textarea
              className="kitchen-chef-input"
              placeholder="Type command to Terminal Chef..."
              value={chefInput}
              rows={3}
              onChange={(e) => setChefInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  setChefInput("");
                }
              }}
              aria-label="Message Terminal Chef"
            />
            <div className="kitchen-chef-composer-bar">
              <div className="kitchen-chef-composer-left">
                <button type="button" className="kitchen-chef-btn-icon" aria-label="Attach file">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                </button>
                <button type="button" className="kitchen-chef-btn-icon" aria-label="Voice input">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="9" y="2" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M5 10a7 7 0 0014 0" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                    <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                </button>
              </div>
              <button type="button" className="kitchen-chef-send" aria-label="Send message">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </button>
            </div>
            <div className="kitchen-chef-meta">
              <span className="kitchen-chef-conn">STATUS: CONNECTED</span>
              <span className="kitchen-chef-tokens">TOKENS: 1,422/5,000</span>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
