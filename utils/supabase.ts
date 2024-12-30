import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://wiezptaghkedysrfbxig.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZXpwdGFnaGtlZHlzcmZieGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NTkxMjksImV4cCI6MjA1MDUzNTEyOX0.CcwXuxInlCSOVROQiYhjFdIBEhNDM-VHVU-M0Tv8A1c";

export const supabase = createClient(supabaseUrl, supabaseKey);
