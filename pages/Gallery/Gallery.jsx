const galleryItems = [
  { label: 'חדר טיפול פרטי', caption: 'אוירה רגועה ומוארת' },
  { label: 'מכשור לייזר רפואי', caption: 'טכנולוגיה מתקדמת ומדויקת' },
  { label: 'ערכת טיפול בעור', caption: 'מוצרים משלימים לשיקום העור' },
]

const Gallery = () => (
  <section className="section" id="gallery">
    <div className="section__content">
      <p className="eyebrow">הסטודיו</p>
      <h2>מקום בטוח ונעים לטפל בעצמך</h2>
      <p>
        חלל אינטימי ונקי, צוות נשים בלבד ותשומת לב אמיתית לפרטים הקטנים. מתחילות
        עם שיחה אישית שמאפשרת לך להרגיש בבית.
      </p>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <figure key={item.label} className="gallery-card">
            <div className="gallery-card__media" aria-hidden="true">
              {item.label}
            </div>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
)

export default Gallery


