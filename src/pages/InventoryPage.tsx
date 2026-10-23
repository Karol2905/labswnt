import { ProductList } from '../components'
import { useInventory } from '../hooks'

/** La página compone: hook (lógica) + componentes (UI). */
export function InventoryPage() {
  const { products, loading, error } = useInventory()

  if (loading) return <p>Cargando...</p>
  if (error) return <p role="alert">Error: {error}</p>

  return (
    <main>
      <h1>Inventario Sostenible</h1>
      <ProductList products={products} />
    </main>
  )
}
