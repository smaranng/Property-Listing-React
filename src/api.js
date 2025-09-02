const BASE_URL = 'http://localhost:5174/api'

export async function getProperties() {
    const res = await fetch(`${BASE_URL}/properties`)
    if (!res.ok) throw new Error('GET failed')
    return res.json()
}

export async function createProperty(payload) {
    const res = await fetch(`${BASE_URL}/properties`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    if (!res.ok) throw new Error('POST failed')
    return res.json()
}