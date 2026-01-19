import ComicJS from '../comics.js'

function Comics() {


  return (
<>
    <div className="comics-section">
      <div className="comics-grid">
        {ComicJS.map((c) => (
          <article className="comic-card" key={c.id}>
            <div className="comic-thumb">
              <img src={c.thumb} alt={c.title} />
            </div>
            <div className="comic-title">{c.title}</div>
          </article>
        ))}
      </div>
    </div>
</>

  )
}

export default Comics