import ComicJS from '../comics.js'
import Card from './Card.jsx'

function Comics() {


  return (
<>
    <div className="comics-section">
      <div className="comics-grid">
         {ComicJS.map((comic) => (
          <Card 
          id={comic.key}
          image={comic.thumb}
          title={comic.title}
          />
        ))} 
        
        

      </div>
    </div>
</>

  )
}

export default Comics