import { createClient } from "@supabase/supabase-js";

let supabase: ReturnType<typeof createClient> | null = null;

export const getSupabase = () => {
  // Prevent Supabase from running during Next.js build / SSR
  if (typeof window === "undefined") {
    return null;
  }

  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Supabase environment variables are missing");
    }

    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }

  return supabase;
};
