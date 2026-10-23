# EcoTech Inventory

App de gestión de inventario sostenible — React + Vite + TypeScript + Supabase.

## Inicio rápido
```bash
npm install
cp .env.example .env.local   # completa con tus credenciales de Supabase
npm run dev
```

## Documentación (Proyecto Integrador)
- [ARCHITECTURE.md](./ARCHITECTURE.md) — Especificación de Arquitectura (SDD)
- [docs/PROMPT_MAESTRO.md](./docs/PROMPT_MAESTRO.md) — Prompt enviado a la IA
- [docs/RESPUESTA_IA_COMANDO.md](./docs/RESPUESTA_IA_COMANDO.md) — Comando ejecutado
- [docs/ARBOL_DIRECTORIOS.txt](./docs/ARBOL_DIRECTORIOS.txt) — Árbol de directorios
- [docs/capturas/](./docs/capturas) — Capturas de pantalla (simuladas a partir de la salida real)

## Esquema esperado en Supabase
```sql
create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sku text unique not null,
  category text not null,
  quantity integer not null default 0,
  carbon_footprint_kg numeric,
  is_recyclable boolean not null default false,
  created_at timestamptz not null default now()
);
```
