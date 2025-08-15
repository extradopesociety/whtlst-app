// src/admin/services/inventoryService.ts
import type { InventoryItem, Collection } from '../types/inventory'

// In-memory mock data
let mockCollections: Collection[] = []
let mockInventory: InventoryItem[] = []

// Collections
export const addCollection = async (collection: Collection) => {
  mockCollections.push(collection)
  return Promise.resolve()
}

export const getCollections = async (): Promise<Collection[]> => {
  return Promise.resolve(mockCollections)
}

// Inventory
export const addInventoryItem = async (item: InventoryItem) => {
  mockInventory.push(item)
  return Promise.resolve()
}

export const getInventoryItems = async (): Promise<InventoryItem[]> => {
  return Promise.resolve(mockInventory)
}

export const updateInventoryItem = async (updatedItem: InventoryItem) => {
  const index = mockInventory.findIndex((i) => i.id === updatedItem.id)
  if (index > -1) {
    mockInventory[index] = updatedItem
  }
  return Promise.resolve()
}

export const deleteInventoryItem = async (id: string) => {
  mockInventory = mockInventory.filter((i) => i.id !== id)
  return Promise.resolve()
}
