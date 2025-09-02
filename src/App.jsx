import { useEffect, useMemo, useState } from 'react'
import { getProperties, createProperty } from './api.js'
import Header from './components/Header.jsx'
import Filters from './components/Filters.jsx'
import SearchBar from './components/Temp.jsx'
import PropertyCard from './components/PropertyCard.jsx'
import PropertyModal from './components/PropertyModal.jsx'
import AddPropertyForm from './components/AddPropertyForm.jsx'
import Loader from './components/Loader.jsx'
import './styles/App.css'
export default function App() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')
  const [active, setActive] = useState(null)
  async function fetchAll() {
    try {
      setLoading(true)
      const data = await getProperties()
      setProperties(data)
    } catch (e) {
      setError('Failed to load properties. Please ensure the mock API is running.')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => { fetchAll() }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return properties.filter(p => {
      const matchesType = type === 'All' || p.type === type
      const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
      return matchesType && matchesQuery
    })
  }, [properties, query, type])

  async function handleCreate(formData) {
    const saved = await createProperty(formData)
    // Re-fetch to reflect source of truth
    await fetchAll()
    return saved
  }
  return (
    <div className="app">
      <Header />

      <section className="toolbar">
        <SearchBar value={query} onChange={setQuery} />
        <Filters value={type} onChange={setType} />
      </section>

      <section className="content">
        <div className="left">
          <h2 className="sectionTitle">Property Listings</h2>
          {loading && <Loader />}\
          {error && <div className="error">{error}</div>}

          <div className="grid">
            {filtered.map(p => (
              <PropertyCard key={p.id} property={p} onView={() => setActive(p)} />
            ))}
            {!loading && !filtered.length && (
              <div className="empty">No properties match your filters.</div>
            )}
          </div>
        </div>
        <div className="right">
          <AddPropertyForm onCreate={handleCreate} />
        </div>
      </section>

      <PropertyModal property={active} onClose={() => setActive(null)} />
    </div>
  )
}