// src/admin/pages/RewardsPage.tsx
import React, { useEffect, useState } from 'react'
import type { InventoryItem, Collection } from '../types/inventory'
import {
  getInventoryItems,
  getCollections,
  updateInventoryItem
} from '../services/inventoryService'

const RewardsPage = () => {
  const [items, setItems] = useState<InventoryItem[]>([])
  const [collections, setCollections] = useState<Collection[]>([])
  const [search, setSearch] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editTokenPrice, setEditTokenPrice] = useState<number | ''>('')

  const fetchData = async () => {
    const inv = await getInventoryItems()
    const col = await getCollections()
    setItems(inv)
    setCollections(col)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const redeemableItems = items.filter(
    (item) =>
      typeof item.tokenPrice === 'number' &&
      item.tokenPrice > 0 &&
      item.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleEditClick = (item: InventoryItem) => {
    setEditingId(item.id)
    setEditTokenPrice(item.tokenPrice ?? '')
  }

  const handleSaveClick = async (item: InventoryItem) => {
    const updatedItem: InventoryItem = {
      ...item,
      tokenPrice: Number(editTokenPrice)
    }
    await updateInventoryItem(updatedItem) // ✅ persist change
    await fetchData() // ✅ refresh both Rewards + Inventory data
    setEditingId(null)
  }

  const getCollectionName = (collectionId: string) => {
    return collections.find((c) => c.id === collectionId)?.name || 'Unknown Collection'
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-black">Rewards Management</h1>
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded w-full md:w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {redeemableItems.length === 0 ? (
        <p className="text-gray-500 italic">No redeemable products found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-2 text-left">Product</th>
                <th className="p-2 text-left">Collection</th>
                <th className="p-2 text-left">Retail Price</th>
                <th className="p-2 text-left">Token Price</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {redeemableItems.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="p-2 flex items-center gap-3">
                    <img src={item.imageUrl} alt={item.name} className="w-10 h-10 rounded object-cover" />
                    {item.name}
                  </td>
                  <td className="p-2">{getCollectionName(item.collectionId)}</td>
                  <td className="p-2">${item.retailPrice}</td>
                  <td className="p-2">
                    {editingId === item.id ? (
                      <input
                        type="number"
                        className="border p-1 w-20"
                        value={editTokenPrice}
                        onChange={(e) => setEditTokenPrice(e.target.value === '' ? '' : Number(e.target.value))}
                      />
                    ) : (
                      `${item.tokenPrice} RWD`
                    )}
                  </td>
                  <td className="p-2 flex gap-2">
                    {editingId === item.id ? (
                      <>
                        <button onClick={() => handleSaveClick(item)} className="px-2 py-1 bg-green-500 text-white rounded text-xs">Save</button>
                        <button onClick={() => setEditingId(null)} className="px-2 py-1 bg-gray-400 text-white rounded text-xs">Cancel</button>
                      </>
                    ) : (
                      <button onClick={() => handleEditClick(item)} className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Edit</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default RewardsPage
