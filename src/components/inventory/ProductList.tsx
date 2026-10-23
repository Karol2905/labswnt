import type { Product } from '../../types'

interface ProductListProps {
  products: Product[]
}

/** Componente presentacional: recibe datos por props, no sabe de dónde vienen. */
export function ProductList({ products }: ProductListProps) {
  if (products.length === 0) return <p>No hay productos registrados.</p>
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name} ({p.sku}) — {p.quantity} uds {p.isRecyclable ? '♻️' : ''}
        </li>
      ))}
    </ul>
  )
}
