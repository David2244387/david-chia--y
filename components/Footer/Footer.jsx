const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>© {currentYear} מיכל אפילציה · כל הזכויות שמורות</p>
      <p>ביתר עילית · רחוב רבי נחמן מברסלב 1 · דירה 3</p>
      <p className="site-footer__contact">
        לתיאום טיפול: <a href="tel:+972504158744">050-415-8744</a> ·{' '}
        
      </p>
    </footer>
  )
}

export default Footer


