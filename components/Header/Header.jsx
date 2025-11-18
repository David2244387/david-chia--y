const Header = ({ sections, activeSection, onNavigate }) => {
  return (
    <header className="site-header">
      <div className="site-header__brand">
        <span className="brand-mark">י"ל</span>
        <div>
          <p className="brand-title">יהודית לוי</p>
          <p className="brand-subtitle">קוסמטיקאית מקצועית - טיפולי יופי וטיפוח</p>
        </div>
      </div>
      <nav className="site-nav">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={`site-nav__link ${activeSection === id ? 'is-active' : ''}`}
            onClick={() => onNavigate(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header


