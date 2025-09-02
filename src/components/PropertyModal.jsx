import { useEffect } from 'react'

export default function PropertyModal({ property, onClose }) {
    useEffect(() => {
        function onEsc(e) { if (e.key === 'Escape') onClose?.() }
        document.addEventListener('keydown', onEsc)
        return () => document.removeEventListener('keydown', onEsc)
    }, [onClose])

    if (!property) return null
    const { name, type, price, location, description, image, coordinates } = property
    const hasCoords = coordinates && typeof coordinates.lat === 'number' && typeof coordinates.lng === 'number'
    const mapSrc = hasCoords
        ? `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&hl=en&z=14&output=embed`
        : null
    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <button className="close" onClick={onClose} aria-label="Close">×</button>
                <div className="modalHeader">
                    <img className="modalImage" src={image} alt={name} />
                    <div>
                        <h3>{name}</h3>
                        <div className="modalMeta">
                            <span className="badge">{type}</span>
                            <span className="price">₹ {price.toLocaleString('en-IN')}</span>
                            <span className="location">{location}</span>
                        </div>
                    </div>
                </div>
                <p className="modalDesc">{description}</p>
                {mapSrc && (
                    <div className="mapWrap">
                        <iframe title="map" src={mapSrc} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                )}
            </div>
        </div>
    )
}