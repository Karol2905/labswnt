# Prompt Maestro utilizado

> Enviado a Claude (IA) para generar la estructura de carpetas.

```text
Actúa como un Arquitecto de Software Senior especializado en React, TypeScript y Supabase, con experiencia guiando equipos junior.

CONTEXTO
La startup "EcoTech Solutions" desarrollará una aplicación de gestión de inventario sostenible (productos, stock, huella de carbono, reciclabilidad). El equipo es junior y suele mezclar la lógica de negocio con los componentes de UI, lo que causa errores constantes. Aplicamos Desarrollo Basado en Especificaciones (SDD): la estructura se define ANTES de programar.

STACK Y RESTRICCIONES TÉCNICAS
- React + Vite + TypeScript (modo estricto).
- Backend como servicio: Supabase (auth, base de datos PostgreSQL, storage).
- Sin librerías de estado global externas por ahora (usar Context API).
- La estructura debe estar organizada por tipo de responsabilidad, ser modular y escalable.

REQUISITOS DE ARQUITECTURA
1. Separación estricta de preocupaciones: UI (components, pages), Lógica (hooks), Servicios (acceso a datos), Tipos (types), Estado global (context), Configuración (config) y Utilidades (utils).
2. Una carpeta específica para la integración con Supabase (services/supabase) que contenga el cliente único; solo la capa de servicios puede importarlo.
3. Regla de dependencias unidireccional: pages → components/hooks → services → supabase.
4. Cada carpeta principal debe tener un index.ts (barrel) y un README.md que explique qué va y qué NO va en ella.

FORMATO DE SALIDA (obligatorio)
A) Un árbol de directorios en bloque de código, dentro de src/, con un comentario breve por carpeta.
B) UN único comando bash (mkdir -p ...) que cree todas las carpetas, compatible con Linux/macOS/Git Bash.
C) Una tabla de 3 columnas: Carpeta | Responsabilidad | Qué NO debe contener.
D) Un ejemplo mínimo del flujo de datos (page → hook → service → supabase) con nombres de archivo.
No incluyas explicaciones fuera de estas cuatro secciones.
```
