const Header = ({ sections, activeSection, onNavigate }) => {
  return (
    <header className="site-header">
      <div className="site-header__brand">
        <span className="brand-mark">MA</span>
        <div>
          <p className="brand-title">מיכל אפילציה</p>
          <p className="brand-subtitle">הסרת שיער לצמיתות בשיטה המתקדמת ביותר</p>
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


