// src/admin/components/Inventory/NewCollectionForm.tsx
import React, { useState } from 'react'
import type { Collection } from '../../types/inventory'
import { addCollection } from '../../services/inventoryService'

interface Props {
  onAdd: () => void // triggers re-fetch
}

const NewCollectionForm: React.FC<Props> = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    dropDate: '',
    featured: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const isCheckbox = type === 'checkbox'
    setForm((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newCollection: Collection = {
      id: crypto.randomUUID(),
      ...form
    }
    await addCollection(newCollection)
    onAdd() // ✅ re-fetch from service
    setForm({ name: '', description: '', dropDate: '', featured: false })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-xl bg-white shadow-md">
      <h2 className="text-lg font-semibold">Create New Collection</h2>
      <div className="grid grid-cols-2 gap-4">
        <input name="name" placeholder="Collection Name" value={form.name} onChange={handleChange} className="border p-2" required />
        <input name="dropDate" type="date" value={form.dropDate} onChange={handleChange} className="border p-2" />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="col-span-2 border p-2" />
        <label className="flex items-center gap-2 col-span-2">
          <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} />
          Featured Collection
        </label>
      </div>
      <button type="submit" className="px-4 py-2 bg-black text-white rounded">Add Collection</button>
    </form>
  )
}

export default NewCollectionForm
