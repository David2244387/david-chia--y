const CTAButton = ({ label, href = '#contact', onClick }) => {
  if (onClick) {
    return (
      <button type="button" className="cta-button" onClick={onClick}>
        {label}
      </button>
    )
  }

  return (
    <a className="cta-button" href={href}>
      {label}
    </a>
  )
}

export default CTAButton


