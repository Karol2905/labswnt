/** Funciones puras sin dependencias de React ni Supabase. */
export const formatCarbon = (kg: number | null): string =>
  kg === null ? 'N/D' : `${kg.toFixed(2)} kg CO₂e`
