import { useState } from 'react'
import CTAButton from '../../components/CTAButton/CTAButton'

const Home = ({ onNavigate }) => {
  const [showContactOptions, setShowContactOptions] = useState(false)

  return (
    <section className="section">
      <div className="section__content">
        <p className="eyebrow">טיפולי יופי מקצועיים לתוצאות מושלמות</p>
        <h1>ברוכים הבאים לסטודיו של יהודית לוי</h1>
        <p>
          קוסמטיקאית מקצועית עם ניסיון רב שנים בתחום היופי והטיפוח.
          <br />
           אצלי תמצאי את כל מה שצריך
          למראה מושלם: החלקות שיער איכותיות, הרמת ריסים מקצועית והרמת גבות מדויקת.
        </p>
        <p>
          רוצות להיראות ולהרגיש במיטבן? חייגי אלינו לקביעת תור בסטודיו שבירושלים,
          רחוב רשי 89 – ונעניק לך שירות מקצועי ואישי ברמה הגבוהה ביותר.
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
              <a className="chip-link" href="tel:+972533422644">
                חייגי עכשיו
              </a>
              <a
                className="chip-link"
                href="https://wa.me/972533422644"
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
          <p>טיפולים מקצועיים</p>
          <strong>ניסיון רב שנים</strong>
          <p>לקוחות מרוצות וממליצות</p>
        </div>
      </div>
    </section>
  )
}

export default Home


