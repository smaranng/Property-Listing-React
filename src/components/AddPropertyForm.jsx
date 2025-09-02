import { useState } from 'react'

const TYPES = ['Apartment', 'Villa', 'Plot', 'Office']

export default function AddPropertyForm({ onCreate }) {
    const [form, setForm] = useState({
        name: '', type: 'Apartment', price: '', location: '', description: '', image: '', lat: '', lng: ''
    })
    const [saving, setSaving] = useState(false)
    const [msg, setMsg] = useState('')

    function update(k, v) { setForm(prev => ({ ...prev, [k]: v })) }

    async function handleSubmit(e) {
        e.preventDefault()
        setSaving(true)
        setMsg('')
        try {
            const payload = {
                name: form.name.trim(),
                type: form.type,
                price: Number(form.price) || 0,
                location: form.location.trim(),
                description: form.description.trim(),
                image: form.image.trim() || 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200',
                coordinates: (form.lat && form.lng) ? { lat: Number(form.lat), lng: Number(form.lng) } : undefined
            }
            await onCreate?.(payload)
            setMsg('Property added successfully!')
            setForm({ name: '', type: 'Apartment', price: '', location: '', description: '', image: '', lat: '', lng: '' })
        } catch (e) {
            setMsg('Failed to add property.')
        } finally {
            setSaving(false)
        }
    }
    return (
        <aside id="add" className="formCard">
            <h2>Add Property</h2>
            <form onSubmit={handleSubmit} className="form">
                <label> Name <input value={form.name} onChange={e => update('name', e.target.value)} required /></label>
                <label> Type
                    <select value={form.type} onChange={e => update('type', e.target.value)}>
                        {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </label>
                <label> Price (₹)
                    <input type="number" value={form.price} onChange={e => update('price', e.target.value)} required />
                </label>
                <label> Location <input value={form.location} onChange={e => update('location', e.target.value)} required /></label>
                <label> Description <textarea rows="3" value={form.description} onChange={e => update('description', e.target.value)} /></label>
                <label> Image URL <input value={form.image} onChange={e => update('image', e.target.value)} placeholder="https://..." /></label>

                <div className="row2">          <label> Lat <input type="number" step="any" value={form.lat} onChange={e => update('lat', e.target.value)} /></label>
                    <label> Lng <input type="number" step="any" value={form.lng} onChange={e => update('lng', e.target.value)} /></label>
                </div>

                <button className="btn primary" disabled={saving}>
                    {saving ? 'Saving…' : 'Add Property'}
                </button>
                {msg && <div className="msg">{msg}</div>}
            </form>
        </aside>
    )
}