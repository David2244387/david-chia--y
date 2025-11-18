const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>© {currentYear}   · כל הזכויות שמורות · נבנה על ידי דוד חייא</p>
      <p>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=רחוב+רשי+89"
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          רחוב רשי 89
        </a>
      </p>
      <p className="site-footer__contact">
        לתיאום תור: <a href="tel:+972533422644">053-342-2644</a>
      </p>
    </footer>
  )
}

export default Footer


