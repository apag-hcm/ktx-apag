window.SUPABASE_CONFIG = {
  URL: "https://adypcfrunxdphknyytqs.supabase.co",
  ANON_KEY: "DÁN_PUBLISHABLE_KEY_SUPABASE_CỦA_BẠN_VÀO_ĐÂY"
};

window.db = supabase.createClient(window.SUPABASE_CONFIG.URL, window.SUPABASE_CONFIG.ANON_KEY);
