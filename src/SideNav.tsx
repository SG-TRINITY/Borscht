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

      <section className="sidenav-footer" aria-label="CPU load">
        <header className="sidenav-footer-head">
          <div className="sidenav-footer-label">CPU LOAD</div>
          <div className="sidenav-footer-value">88%</div>
        </header>
        <div className="sidenav-footer-bar">
          <div className="sidenav-footer-bar-fill" />
        </div>
      </section>
    </aside>
  );
}

