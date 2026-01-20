import ComicJS from '../comics.js'
import Card from './Card.jsx'

function Comics() {
  return (
    <section className="comics-section">
      <div className="comics-grid">
        {ComicJS.map((comic) => (
          <div className="col-6" key={comic.key}>
            <Card
              image={comic.thumb}
              title={comic.title}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Comics