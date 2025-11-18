import styles from './TreatmentCard.module.css'

const TreatmentCard = ({ title, description, image, contents = [] }) => (
  <article className={styles.treatmentCard}>
    {image && (
      <div className={styles.treatmentCard__image}>
        <img src={image} alt={title} />
      </div>
    )}
    <div className={styles.treatmentCard__content}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {contents && contents.length > 0 && (
        <ul className={styles.treatmentCard__list}>
          {contents.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </article>
)

export default TreatmentCard


