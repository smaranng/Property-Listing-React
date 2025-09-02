const TYPES = ['All', 'Apartment', 'Villa', 'Plot', 'Office']

export default function Filters({ value, onChange }) {
    return (
        <div className="filters">
            <label htmlFor="type">Type</label>
            <select id="type" value={value} onChange={e => onChange(e.target.value)}>
                {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
        </div>
    )
}