window.SUPABASE_CONFIG = {
  URL: "https://adypcfrunxdphknyytqs.supabase.co",
  ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkeXBjZnJ1bnhkcGhrbnl5dHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3OTU4NTIsImV4cCI6MjEwMzM3MTg1Mn0.atn3GPuWnGtsFqKVKYZTdhVGXAsW86Eghvg0MEt4pl4"
};

window.db = supabase.createClient(window.SUPABASE_CONFIG.URL, window.SUPABASE_CONFIG.ANON_KEY);
