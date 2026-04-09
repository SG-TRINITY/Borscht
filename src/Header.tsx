import "./Header.css";

export default function Header() {
  return (
    <header className="topbar" aria-label="Header">
      <div className="topbar-left">
        <img className="topbar-logo" src="/logo_borscht.svg" alt="Borscht" decoding="async" />
      </div>
      <div className="topbar-right" aria-hidden>
        <img className="topbar-terminal" src="/header_terminal.svg" alt="" width={20} height={16} decoding="async" />
      </div>
    </header>
  );
}

