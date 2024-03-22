import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iucyyjwuviqgmwzhunfp.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1Y3l5and1dmlxZ213emh1bmZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMTEwNjYsImV4cCI6MjAyNjY4NzA2Nn0.tc95Zp_Wo2JOZRqW6apycPvOT7PUPaD4ZOX9uarK898`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
