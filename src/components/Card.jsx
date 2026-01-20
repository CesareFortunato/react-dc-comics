

export default function Card(props) {

    const {title,image} = props

  return (
    <article className="card">
      <div className="card-media">
        <img
          src={image}
          alt= {title}
        />
      </div>

      <h3 className="card-title">
        {title}
      </h3>
    </article>
  )
}