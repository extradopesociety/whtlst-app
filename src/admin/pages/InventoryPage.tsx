// src/admin/pages/InventoryPage.tsx
import React, { useEffect, useState } from 'react'
import { getCollections, getInventoryItems } from '../services/inventoryService'
import type { InventoryItem, Collection } from '../types/inventory'
import NewCollectionForm from '../components/Inventory/NewCollectionForm'
import NewInventoryForm from '../components/Inventory/NewInventoryForm'
import CollectionList from '../components/Inventory/CollectionList'
import InventoryTable from '../components/Inventory/InventoryTable'

const InventoryPage = () => {
  const [collections, setCollections] = useState<Collection[]>([])
  const [items, setItems] = useState<InventoryItem[]>([])

  const fetchData = async () => {
    const col = await getCollections()
    const inv = await getInventoryItems()
    setCollections(col)
    setItems(inv)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="space-y-8">
      <h1 className="text-2xl text-black font-bold">Inventory Management</h1>

      {/* Collections */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Collections</h2>
        <NewCollectionForm onAdd={fetchData} /> {/* ✅ now just re-fetch */}
        <CollectionList collections={collections} />
      </section>

      {/* Products */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Products</h2>
        <NewInventoryForm
          collections={collections}
          onAdd={(item) => setItems((prev) => [...prev, item])}
        />
        <InventoryTable
          items={items}
          collections={collections}
          onUpdate={fetchData}
          onDelete={fetchData}
        />
      </section>
    </div>
  )
}

export default InventoryPage
