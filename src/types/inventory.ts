/** Contratos del dominio. Reflejan las tablas de Supabase. */
export interface Product {
  id: string
  name: string
  sku: string
  category: string
  quantity: number
  /** Huella de carbono estimada en kg CO2e por unidad */
  carbonFootprintKg: number | null
  isRecyclable: boolean
  createdAt: string
}

export type NewProduct = Omit<Product, 'id' | 'createdAt'>
