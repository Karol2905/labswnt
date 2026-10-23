/** Único lugar donde se leen variables de entorno. */
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

if (!url || !anonKey) {
  throw new Error('Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY. Revisa .env.example')
}

export const env = { supabaseUrl: url, supabaseAnonKey: anonKey }
