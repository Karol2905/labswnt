import type { NewProduct, Product } from '../types'
import { supabase } from './supabase'

/** Fila de la tabla `products` (snake_case) tal como la devuelve Supabase. */
interface ProductRow {
  id: string
  name: string
  sku: string
  category: string
  quantity: number
  carbon_footprint_kg: number | null
  is_recyclable: boolean
  created_at: string
}

const toProduct = (r: ProductRow): Product => ({
  id: r.id,
  name: r.name,
  sku: r.sku,
  category: r.category,
  quantity: r.quantity,
  carbonFootprintKg: r.carbon_footprint_kg,
  isRecyclable: r.is_recyclable,
  createdAt: r.created_at,
})

export const inventoryService = {
  async getAll(): Promise<Product[]> {
    const { data, error } = await supabase.from('products').select('*').order('name')
    if (error) throw new Error(error.message)
    return (data as ProductRow[]).map(toProduct)
  },

  async create(input: NewProduct): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .insert({
        name: input.name,
        sku: input.sku,
        category: input.category,
        quantity: input.quantity,
        carbon_footprint_kg: input.carbonFootprintKg,
        is_recyclable: input.isRecyclable,
      })
      .select()
      .single()
    if (error) throw new Error(error.message)
    return toProduct(data as ProductRow)
  },

  async remove(id: string): Promise<void> {
    const { error } = await supabase.from('products').delete().eq('id', id)
    if (error) throw new Error(error.message)
  },
}
