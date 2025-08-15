// src/admin/components/Inventory/CollectionList.tsx
import React from 'react'
import type { Collection } from '../../types/inventory'

interface Props {
  collections: Collection[]
}

const CollectionList: React.FC<Props> = ({ collections }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg text-black font-semibold mb-2">Collections</h2>
      <ul className="space-y-2">
        {collections.map((c) => (
          <li key={c.id} className="p-3 bg-white rounded-lg shadow flex justify-between items-center">
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-gray-500">{c.description || 'No description'}</div>
            </div>
            {c.featured && <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Featured</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CollectionList
