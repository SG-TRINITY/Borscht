import "./SideNav.css";

export type NavId = "pot" | "cringe" | "kitchen" | "settings";

const NAV_ITEMS: Array<{ id: NavId; label: string; icon: string }> = [
  { id: "pot", label: "THE POT", icon: "/pot.svg" },
  { id: "cringe", label: "CRINGE INDEX", icon: "/cringe.svg" },
  { id: "kitchen", label: "THE KITCHEN", icon: "/kitchen.svg" },
  { id: "settings", label: "SETTINGS", icon: "/settings.svg" },
];

export default function SideNav(props: {
  active: NavId;
  onSelect: (id: NavId) => void;
}) {
  const { active, onSelect } = props;

  return (
    <aside className="sidenav" aria-label="Primary">
      <div className="sidenav-status">
        <div className="sidenav-status-title">SYSTEM STATUS</div>
        <div className="sidenav-status-sub">MODULE: BORSCHT_MAIN</div>
      </div>

      <nav className="sidenav-nav">
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              type="button"
              className={["sidenav-link", isActive ? "is-active" : ""].filter(Boolean).join(" ")}
              onClick={() => onSelect(item.id)}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="sidenav-icon" aria-hidden>
                <img src={item.icon} alt="" width={18} height={18} decoding="async" />
              </span>
              <span className="sidenav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <section className="sidenav-footer" aria-label="System stats">
        <div className="sidenav-stat-row">
          <span className="sidenav-stat-label">MODULE_UPTIME</span>
          <span className="sidenav-stat-value sidenav-stat-value--red">122:14:09</span>
        </div>

        <div className="sidenav-stat-row sidenav-stat-row--cpu">
          <span className="sidenav-stat-label sidenav-stat-label--red">CPU_LOAD_STR</span>
          <span className="sidenav-stat-value">88.4%</span>
        </div>
        <div className="sidenav-footer-bar">
          <div className="sidenav-footer-bar-fill" />
        </div>

        <div className="sidenav-divider" />

        <div className="sidenav-logs-label">SYSTEM_LOGS:</div>
        <ul className="sidenav-logs">
          <li>&gt; INTAKE_VALVE_OPEN</li>
          <li>&gt; PRESSURE_STABLE_0.8</li>
          <li>&gt; FERMENTATION_INIT...</li>
        </ul>
      </section>
    </aside>
  );
}

