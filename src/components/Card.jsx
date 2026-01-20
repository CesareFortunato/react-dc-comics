export default function Card(props) {
  return (
    <article className="card">
      <div className="card-media">
        <img
          src={props.image}
          alt={props.title}
        />
      </div>

      <h3 className="card-title">
        {props.title}
      </h3>
    </article>
  )
}