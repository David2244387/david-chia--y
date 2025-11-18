// אם התמונות בתיקיית assets, ייבא אותן כך:
// import image1 from '../../assets/gallery-1.jpg'
// import image2 from '../../assets/gallery-2.jpg'
// import image3 from '../../assets/gallery-3.jpg'

// אם התמונות בתיקיית public, השתמש בנתיבים כך:
// '/gallery-1.jpg', '/gallery-2.jpg', '/gallery-3.jpg'

const galleryItems = [
  { 
    image: './assets/חדר טיפולים.jpeg', // או import image1 מ-assets
    label: 'חדר טיפול פרטי', 
    caption: 'אוירה רגועה ונעימה' 
  },
  { 
    image: 'assets/מוצרים.jpeg', // או import image2 מ-assets
    label: 'חומרים איכותיים', 
    caption: 'מוצרים מקצועיים וטובים' 
  },
  { 
    image: 'assets/מוצרים בעגלה.jpg', // או import image3 מ-asset
    label: 'מכשור חדשני', 
    caption: 'מכשירים מקצועיים ואיכותיים' 
  },
]

const Gallery = () => (
  <section className="section" id="gallery">
    <div className="section__content">
      <p className="eyebrow">הסטודיו</p>
      <h2>מקום נעים ומקצועי לטיפולי יופי</h2>
      <p>
        סטודיו נקי ומסודר בירושלים, עם אוירה נעימה ותשומת לב אישית לכל לקוחה.
        אנו משתמשות בחומרים איכותיים וטכניקות מקצועיות כדי להבטיח את התוצאות הטובות ביותר.
      </p>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <figure key={item.label} className="gallery-card">
            <div className="gallery-card__media">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.label}
                  loading="lazy"
                />
              ) : (
                <span aria-hidden="true">{item.label}</span>
              )}
            </div>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
)

export default Gallery


