import { useState } from 'react'
import CTAButton from '../../components/CTAButton/CTAButton'

const Home = ({ onNavigate }) => {
  const [showContactOptions, setShowContactOptions] = useState(false)

  return (
    <section className="section">
      <div className="section__content">
        <p className="eyebrow">טיפולי הסרת שיער במכשיר ללא כאב</p>
        <h1>ברוכים הבאים לממלכת האפילציה של מיכל חייא</h1>
        <p>
          הסרת שיער לצמיתות בשיטה המתקדמת ביותר, עם מכשור מדויק וכ־99% ללא כאב. 10 שנות
          ניסיון מקצועי בתחום מבטיחות תהליך אישי, דיסקרטי וברמה הגבוהה ביותר.
        </p>
        <p>
          רוצים להיפטר מהשיער לצמיתות? חייגי אלינו לקביעת ייעוץ אישי בסטודיו שבביתר
          עילית, רחוב רבי נחמן מברסלב 1 (דירה 3) – וגלי עור חלק לאורך זמן.
        </p>
        <div className="cta-row">
          <CTAButton label="קביעת שיחת ייעוץ" onClick={() => setShowContactOptions((prev) => !prev)} />
          <button className="secondary-link" type="button" onClick={() => onNavigate?.('treatments')}>
            לכל הטיפולים
          </button>
        </div>
        {showContactOptions && (
          <div className="contact-options">
            <p>איך תרצי לדבר?</p>
            <div className="contact-options__actions">
              <a className="chip-link" href="tel:+972504158744">
                חייגי עכשיו
              </a>
              <a
                className="chip-link"
                href="https://wa.me/972504158744"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <button className="chip-link chip-link--ghost" type="button" onClick={() => setShowContactOptions(false)}>
                סגירה
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="section__media">
        <div className="hero-card">
          <p>כ־99% ללא כאב</p>
          <strong>10 שנות מומחיות</strong>
          <p>מאות לקוחות מרוצות בכל חודש</p>
        </div>
      </div>
    </section>
  )
}

export default Home


