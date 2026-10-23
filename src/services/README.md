# services/
Capa de acceso a datos. Aquí viven TODAS las consultas a Supabase.
- Un archivo por dominio: `inventoryService.ts`, `authService.ts`...
- Reciben y devuelven tipos de `types/` (nunca filas crudas de la BD).
- No usan hooks ni JSX.
