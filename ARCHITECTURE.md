# Especificación de Arquitectura — EcoTech Inventory

## 1. Contexto y problema
EcoTech Solutions desarrolla una app de gestión de inventario sostenible con React (Vite), TypeScript y Supabase. El equipo es junior y tiende a mezclar lógica de negocio con componentes visuales, lo que genera errores repetidos y código difícil de probar. Siguiendo el Desarrollo Basado en Especificaciones (SDD), este documento se escribió **antes** de crear carpetas ni código: es el plano que el equipo debe respetar.

## 2. Principio rector: separación de preocupaciones
Cada carpeta tiene una única responsabilidad y una regla de dependencia en un solo sentido:

`pages → components / hooks → services → services/supabase`

| Capa | Responsabilidad | Prohibido |
|---|---|---|
| `components/` | Mostrar datos y emitir eventos (UI pura) | Llamar a Supabase, contener reglas de negocio |
| `hooks/` | Estado y lógica de negocio | Renderizar JSX, usar el cliente de Supabase |
| `services/` | Acceso a datos y transformación | Usar React |
| `services/supabase/` | Cliente único de Supabase | Ser importado fuera de `services/` |
| `types/` | Contratos del dominio | Contener lógica |
| `context/` | Estado global (sesión, tema) | Reemplazar hooks para estado local |
| `config/` | Variables de entorno tipadas | — |
| `utils/` | Funciones puras | Depender de React o Supabase |

## 3. Relación con Supabase (capa de servicios)
Supabase se aísla detrás de una **capa de servicios**. El cliente se crea una sola vez en `services/supabase/client.ts` y solo los servicios (`inventoryService`) lo usan. Cada servicio recibe y devuelve tipos de dominio (`Product`) y convierte las filas de la base de datos (`snake_case`) a objetos de la aplicación (`camelCase`).

Beneficios concretos:
- **Cambio de proveedor o de esquema:** si cambia una columna o se migra de Supabase, se edita un solo archivo; la UI no se entera.
- **Testeo:** los hooks se prueban simulando el servicio; los componentes, pasándoles props.
- **Seguridad:** las claves se leen únicamente en `config/env.ts`, desde variables `VITE_*`, y `.env.local` está ignorado por Git.
- **Tipado de extremo a extremo:** `types/` puede alojar los tipos generados con `supabase gen types`.

## 4. Flujo de datos de ejemplo
1. `InventoryPage` invoca `useInventory()`.
2. El hook llama a `inventoryService.getAll()`.
3. El servicio consulta Supabase y devuelve `Product[]`.
4. La página pasa los datos a `ProductList`, que solo los pinta.

## 5. Escalabilidad
Para agregar un módulo (por ejemplo, Proveedores) se añade un archivo por capa: `types/supplier.ts`, `services/supplierService.ts`, `hooks/useSuppliers.ts`, `components/suppliers/` y `pages/SuppliersPage.tsx`. El patrón es repetible y predecible para un equipo junior. Cada carpeta expone un `index.ts` (barrel) que define su API pública.

## 6. Prevención de deuda técnica
Decidir las fronteras antes de programar evita que la lógica se filtre a la UI y que las consultas se dupliquen en múltiples componentes. Cada carpeta incluye un `README.md` con sus reglas, de modo que la especificación vive junto al código y se aplica en las revisiones de código (code review).
