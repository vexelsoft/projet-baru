import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'SUPABASE_URL atau SUPABASE_ANON_KEY belum terisi'
  );
}

export const supabase =
createClient(
  supabaseUrl,
  supabaseKey
);
