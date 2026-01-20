

export default function Card(props) {
    return (
        <div className="card" key={props.id}>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
        </div>

    );
}

