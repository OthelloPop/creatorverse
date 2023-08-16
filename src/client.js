import { createClient } from '@supabase/supabase-js';
const URL = 'https://zmoebrmrqicuiehyxvza.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inptb2Vicm1ycWljdWllaHl4dnphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3OTI5NTEsImV4cCI6MjAwNzM2ODk1MX0.sbCYQSmU1yhzcKKtRlhqQPqg42UlgQtSf9sMWKKzC68';
export const supabase = createClient(URL, API_KEY);