// src/admin/components/Inventory/InventoryTable.tsx
import React, { useState } from 'react'
import type { InventoryItem, Collection } from '../../types/inventory'
import { updateInventoryItem, deleteInventoryItem } from '../../services/inventoryService'

interface Props {
  items: InventoryItem[]
  collections: Collection[]
  onUpdate: (updatedItem: InventoryItem) => void
  onDelete: (id: string) => void
}

const InventoryTable: React.FC<Props> = ({ items, collections, onUpdate, onDelete }) => {
  const [editingItemId, setEditingItemId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<Partial<InventoryItem>>({})

  const grouped = collections.map((collection) => ({
    ...collection,
    items: items.filter((item) => item.collectionId === collection.id),
  }))

  const handleEditClick = (item: InventoryItem) => {
    setEditingItemId(item.id)
    setEditForm({ ...item })
  }

  const handleSaveClick = async () => {
    if (!editingItemId) return
    const updatedItem = { ...(editForm as InventoryItem), id: editingItemId }
    await updateInventoryItem(updatedItem)
    onUpdate(updatedItem)
    setEditingItemId(null)
  }

  const handleCancelClick = () => {
    setEditingItemId(null)
    setEditForm({})
  }

  const handleDeleteClick = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      await deleteInventoryItem(id)
      onDelete(id)
    }
  }

  return (
    <div className="space-y-8">
      {grouped.map((group) => (
        <div key={group.id} className="bg-white rounded-xl shadow p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <div>
              <h2 className="text-lg font-bold">{group.name}</h2>
              {group.description && <p className="text-sm text-gray-500">{group.description}</p>}
            </div>
            {group.featured && (
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Featured</span>
            )}
          </div>

          {group.items.length === 0 ? (
            <p className="text-sm text-gray-400 italic">No items in this collection yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Image</th>
                    <th className="p-2">Cost</th>
                    <th className="p-2">Price</th>
                    <th className="p-2">Stock</th>
                    <th className="p-2">Featured</th>
                    <th className="p-2">Token Price</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map((item) => {
                    const isEditing = editingItemId === item.id
                    return (
                      <tr key={item.id} className="border-t hover:bg-gray-50">
                        <td className="p-2">
                          {isEditing ? (
                            <input
                              value={editForm.name || ''}
                              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                              className="border p-1 w-full"
                            />
                          ) : (
                            item.name
                          )}
                        </td>
                        <td className="p-2">
                          <img src={item.imageUrl} alt={item.name} className="w-12 h-12 rounded object-cover" />
                        </td>
                        <td className="p-2">
                          {isEditing ? (
                            <input
                              type="number"
                              value={editForm.companyCost || ''}
                              onChange={(e) => setEditForm({ ...editForm, companyCost: Number(e.target.value) })}
                              className="border p-1 w-full"
                            />
                          ) : (
                            `$${item.companyCost}`
                          )}
                        </td>
                        <td className="p-2">
                          {isEditing ? (
                            <input
                              type="number"
                              value={editForm.retailPrice || ''}
                              onChange={(e) => setEditForm({ ...editForm, retailPrice: Number(e.target.value) })}
                              className="border p-1 w-full"
                            />
                          ) : (
                            `$${item.retailPrice}`
                          )}
                        </td>
                        <td className="p-2">
                          {isEditing ? (
                            <input
                              type="number"
                              value={editForm.inStock || ''}
                              onChange={(e) => setEditForm({ ...editForm, inStock: Number(e.target.value) })}
                              className="border p-1 w-full"
                            />
                          ) : (
                            item.inStock
                          )}
                        </td>
                        <td className="p-2 text-center">
                          {isEditing ? (
                            <input
                              type="checkbox"
                              checked={editForm.isFeatured || false}
                              onChange={(e) => setEditForm({ ...editForm, isFeatured: e.target.checked })}
                            />
                          ) : (
                            item.isFeatured ? '✅' : '—'
                          )}
                        </td>
                        <td className="p-2">
                          {isEditing ? (
                            <input
                              type="number"
                              value={editForm.tokenPrice ?? ''} // ✅ Type-safe optional chaining
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  tokenPrice: e.target.value === '' ? undefined : Number(e.target.value),
                                })
                              }
                              className="border p-1 w-full"
                            />
                          ) : (
                            item.tokenPrice ? `${item.tokenPrice} RWD` : '—'
                          )}
                        </td>
                        <td className="p-2 flex gap-2">
                          {isEditing ? (
                            <>
                              <button onClick={handleSaveClick} className="px-2 py-1 bg-green-500 text-white rounded text-xs">Save</button>
                              <button onClick={handleCancelClick} className="px-2 py-1 bg-gray-400 text-white rounded text-xs">Cancel</button>
                            </>
                          ) : (
                            <>
                              <button onClick={() => handleEditClick(item)} className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Edit</button>
                              <button onClick={() => handleDeleteClick(item.id)} className="px-2 py-1 bg-red-500 text-white rounded text-xs">Delete</button>
                            </>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default InventoryTable
