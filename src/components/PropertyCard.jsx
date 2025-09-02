export default function PropertyCard({ property, onView }) {
    const { name, type, price, location, description, image } = property

    return (
        <article className="card">
            <img className="cardImage" src={image} alt={name} loading="lazy" />
            <div className="cardBody">
                <div className="cardHeader">
                    <h3 className="cardTitle">{name}</h3>
                    <span className="badge">{type}</span>
                </div>
                <div className="cardMeta">
                    <span className="price">₹ {price.toLocaleString('en-IN')}</span>
                    <span className="location">{location}</span>
                </div>
                <p className="cardDesc">{description}</p>
                <div className="cardActions">
                    <button className="btn" onClick={onView}>View</button>
                </div>
            </div>
        </article>
    )
}