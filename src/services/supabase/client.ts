import { createClient } from '@supabase/supabase-js'
import { env } from '../../config'

/** Única instancia del cliente de Supabase en toda la app. */
export const supabase = createClient(env.supabaseUrl, env.supabaseAnonKey)
