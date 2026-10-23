import { useCallback, useEffect, useState } from 'react'
import { inventoryService } from '../services'
import type { Product } from '../types'

/** Lógica de negocio del inventario: estado, carga y errores. La UI solo consume esto. */
export function useInventory() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      setProducts(await inventoryService.getAll())
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  return { products, loading, error, refresh }
}
