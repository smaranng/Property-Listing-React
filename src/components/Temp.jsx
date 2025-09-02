export default function SearchBar({ value, onChange }) {
    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Search by name or location..."
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    )
}