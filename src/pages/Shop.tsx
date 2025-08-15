// src/pages/Shop.tsx
import React, { useEffect, useState } from 'react'
import MobileLayout from '../layouts/MobileLayout'
import { getInventoryItems } from '../admin/services/inventoryService'
import type { InventoryItem } from '../admin/types/inventory'

const Shop = () => {
  const [products, setProducts] = useState<InventoryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        setLoading(true)
        const data = await getInventoryItems()
        if (!mounted) return
        setProducts(Array.isArray(data) ? data : [])
      } catch (e) {
        if (!mounted) return
        setError('Failed to load products.')
      } finally {
        if (mounted) setLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <MobileLayout>
      <div
        className="flex flex-col items-center text-darkyellow px-4"
        style={{ fontFamily: 'Lora, Sumana, Faustina' }}
      >
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-2">Explore Winter</h2>
        <p className="text-center mb-6">This is the main shop.</p>

        {/* States */}
        {loading && (
          <p className="text-center text-gray-500 italic">Loading products…</p>
        )}
        {error && !loading && (
          <p className="text-center text-red-600">{error}</p>
        )}

        {/* Product Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {products.length === 0 ? (
              <p className="col-span-2 text-center text-gray-500 italic">
                No products available yet.
              </p>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                >
                  {/* Image */}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-36 sm:h-48 object-cover"
                    loading="lazy"
                  />

                  {/* Info */}
                  <div className="p-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold">{product.name}</h3>
                      {/* Optional badge if your type includes isFeatured */}
                      {'isFeatured' in product && product.isFeatured ? (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-black text-white">
                          Featured
                        </span>
                      ) : null}
                    </div>

                    <p className="text-sm text-gray-600">${product.retailPrice}</p>

                    {/* Optional stock line if your type includes inStock */}
                    {'inStock' in product ? (
                      <p className="text-xs text-gray-500 mt-1">Stock: {product.inStock}</p>
                    ) : null}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </MobileLayout>
  )
}

export default Shop
