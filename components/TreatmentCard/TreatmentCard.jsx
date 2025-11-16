const TreatmentCard = ({ title, description, duration, price }) => (
  <article className="treatment-card">
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="treatment-card__meta">
      <span>{duration}</span>
      <strong>{price}</strong>
    </div>
  </article>
)

export default TreatmentCard


