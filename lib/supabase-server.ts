import { createClient } from "@supabase/supabase-js";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

export const supabaseServer = () => {
  const url = "https://avgphpdacyssmfughbiy.supabase.co";
  const serviceRoleKey = "sb_secret_WiKae7e4kT3gVmf06hWe6g_8eB90XDC";

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
};
