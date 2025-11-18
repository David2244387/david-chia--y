import TreatmentCard from '../../components/TreatmentCard/TreatmentCard'
import eyelashesImage from '../../assets/הרמת ריסים.jpg'
import eyebrowsImage from '../../assets/גבות.jpg'
import straighteningImage from '../../assets/החלקות.jpeg'
import styles from './Treatments.module.css'

const Treatments = () => {
  const treatments = [
    {
      title: 'ריסים',
      description: 'הרמת ריסים מקצועית לתוצאות מושלמות',
      image: eyelashesImage,
      contents: [
        'הרמת ריסים קלאסית',
        'הרמת ריסים ווליום',
        'הרמת ריסים היברידית',
        'טיפול מקצועי ואיכותי',
        'תוצאות ארוכות טווח'
      ]
    },
    {
      title: 'גבות',
      description: 'עיצוב והרמת גבות מדויקת',
      image: eyebrowsImage,
      contents: [
        'הרמת גבות מקצועית',
        'עיצוב גבות לפי מבנה הפנים',
        'צביעת גבות',
        'טיפול עדין ומדויק',
        'תוצאות טבעיות ומרשימות'
      ]
    },
    {
      title: 'החלקות',
      description: 'החלקות שיער איכותיות ומקצועיות',
      image: straighteningImage,
      contents: [
        'החלקת שיער ברזילאית',
        'החלקת שיער יפנית',
        'החלקת שיער קראטין',
        'חומרים איכותיים ובטוחים',
        'תוצאות חלקות ומבריקות'
      ]
    }
  ]

  return (
    <section className="section">
      <div className="section__content">
        <p className="eyebrow">הטיפולים שלנו</p>
        <h2>טיפולי יופי מקצועיים</h2>
        <p>
          אצלנו תמצאי מגוון רחב של טיפולי יופי מקצועיים, המבוצעים בחומרים איכותיים
          ובטכניקות מתקדמות. כל טיפול מותאם אישית לצרכים שלך כדי להבטיח את התוצאות הטובות ביותר.
        </p>
        <div className={styles.treatmentsGrid}>
          {treatments.map((treatment) => (
            <TreatmentCard
              key={treatment.title}
              title={treatment.title}
              description={treatment.description}
              image={treatment.image}
              contents={treatment.contents}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Treatments

