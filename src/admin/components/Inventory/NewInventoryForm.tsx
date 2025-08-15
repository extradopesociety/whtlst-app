// src/admin/components/Inventory/NewInventoryForm.tsx
import React, { useState } from 'react'
import type { InventoryItem, Collection } from '../../types/inventory'
import { addInventoryItem } from '../../services/inventoryService'

interface Props {
  onAdd: (item: InventoryItem) => void
  collections: Collection[]
}

const NewInventoryForm: React.FC<Props> = ({ onAdd, collections }) => {
  const [form, setForm] = useState({
    name: '',
    imageUrl: '',
    companyCost: '',
    retailPrice: '',
    inStock: '',
    isFeatured: false,
    collectionId: '',
    tokenPrice: '',
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

    if (!form.collectionId) {
      alert('Please select a collection.')
      return
    }

    const newItem: InventoryItem = {
      id: crypto.randomUUID(),
      name: form.name,
      imageUrl: form.imageUrl,
      companyCost: parseFloat(form.companyCost),
      retailPrice: parseFloat(form.retailPrice),
      inStock: parseInt(form.inStock),
      isFeatured: form.isFeatured,
      collectionId: form.collectionId,
      tokenPrice: form.tokenPrice ? parseFloat(form.tokenPrice) : undefined
    }

    await addInventoryItem(newItem) // persist in mock service
    onAdd(newItem) // instantly update state in InventoryPage

    setForm({
      name: '',
      imageUrl: '',
      companyCost: '',
      retailPrice: '',
      inStock: '',
      isFeatured: false,
      collectionId: '',
      tokenPrice: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-xl bg-white shadow-md mt-8">
      <h2 className="text-lg font-semibold">Add Product to Collection</h2>
      <div className="grid grid-cols-2 gap-4">
        <select
          name="collectionId"
          value={form.collectionId}
          onChange={handleChange}
          className="col-span-2 border p-2"
          required
        >
          <option value="">Select Collection</option>
          {collections.map((col) => (
            <option key={col.id} value={col.id}>
              {col.name}
            </option>
          ))}
        </select>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-2" required />
        <input name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} className="border p-2" required />
        <input name="companyCost" placeholder="Company Cost" value={form.companyCost} onChange={handleChange} type="number" className="border p-2" required />
        <input name="retailPrice" placeholder="Retail Price" value={form.retailPrice} onChange={handleChange} type="number" className="border p-2" required />
        <input name="inStock" placeholder="Stock" value={form.inStock} onChange={handleChange} type="number" className="border p-2" required />
        <input name="tokenPrice" placeholder="Token Price (RWD)" value={form.tokenPrice} onChange={handleChange} type="number" className="border p-2" />
        <label className="flex items-center space-x-2 col-span-2">
          <input name="isFeatured" type="checkbox" checked={form.isFeatured} onChange={handleChange} />
          <span>Featured</span>
        </label>
      </div>
      <button type="submit" className="px-4 py-2 bg-black text-white rounded">Add Item</button>
    </form>
  )
}

export default NewInventoryForm
