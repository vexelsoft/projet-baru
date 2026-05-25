import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

console.log("SUPABASE_URL:", supabaseUrl);
console.log("KEY ADA:", !!supabaseKey);

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
