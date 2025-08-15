// src/admin/types/inventory.d.ts
export type InventoryItem = {
  id: string
  name: string
  imageUrl: string
  companyCost: number
  retailPrice: number
  isFeatured: boolean
  inStock: number
  collectionId: string
  tokenPrice?: number // ✅ Added for Rewards
}

export type Collection = {
  id: string
  name: string
  description?: string
  featured?: boolean
  dropDate?: string
}
