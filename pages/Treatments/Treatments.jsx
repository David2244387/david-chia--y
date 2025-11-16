import TreatmentCard from '../../components/TreatmentCard/TreatmentCard'

const treatments = [
  {
    title: 'פנים ',
    description: 'טיפול ממוקד לעור עדין בעזרת קירור מתקדם והפחתת אדמומיות.',
    duration: '30 דקות',
    price: '₪80',
  },
  {
    title: 'ידיים ',
    description: 'כיסוי מלא מכף היד ועד הכתף לקבלת מראה נקי וחלק לאורך זמן.',
    duration: '30 דקות',
    price: '₪80',
  },
  {
    title: 'רגליים ',
    description: 'טיפול יסודי בשתי הרגליים עם התאמה לעור כהה ובהיר.',
    duration: '30 דקות',
    price: '₪80',
  },
]

const Treatments = () => (
  <section className="section" id="treatments">
    <div className="section__content">
      <p className="eyebrow">טיפולי הדגל</p>
      <h2>התוצאות הטובות ביותר בלוח זמנים שמתאים לך</h2>
      <p>
        כל טיפול מחושב לפי חצי שעה (₪80), וכולל אבחון ראשוני, מדידות מדויקות והתאמה אישית
        לעור ולגוון השיער, כדי להבטיח תוצאה מיטבית ללא פשרות.
      </p>
      <div className="treatment-grid">
        {treatments.map((treatment) => (
          <TreatmentCard key={treatment.title} {...treatment} />
        ))}
      </div>
    </div>
  </section>
)

export default Treatments


