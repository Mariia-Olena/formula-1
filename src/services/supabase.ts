import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

export const supabaseUrl = 'https://hyzedkstzflhpkfgukad.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5emVka3N0emZsaHBrZmd1a2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3NDE5MDYsImV4cCI6MjAyNTMxNzkwNn0.XloBvVYMVc0WN_fbDzmC0OLm405EYNUobwaOGPlQ7RU';
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
