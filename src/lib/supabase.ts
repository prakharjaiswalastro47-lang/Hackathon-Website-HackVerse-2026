import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'your_supabase_project_url' && 
  supabaseAnonKey !== 'your_supabase_anon_key'
);

if (!isSupabaseConfigured) {
  console.warn(
    '⚠️ Supabase environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) are missing or using placeholder values. Demo mode active.'
  );
}

// Fallback to demo URL & key to prevent top-level runtime crash on deployment
const validUrl = isSupabaseConfigured ? supabaseUrl! : 'https://placeholder.supabase.co';
const validKey = isSupabaseConfigured ? supabaseAnonKey! : 'placeholder-anon-key';

export const supabase: SupabaseClient = createClient(validUrl, validKey);

