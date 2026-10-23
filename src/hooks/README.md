# hooks/
Custom hooks con la lógica de negocio y de estado (`useInventory`, `useAuth`...).
- Llaman a `services/`, nunca a Supabase directamente.
- Devuelven datos y acciones listos para que la UI los pinte.
