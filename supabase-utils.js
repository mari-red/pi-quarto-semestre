import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://oyulvtemyaaigyzhqzte.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95dWx2dGVteWFhaWd5emhxenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2NDc4NzMsImV4cCI6MjAzMTIyMzg3M30.X5GGZQrDRVBUFoaAHZPpo5Jas1xuotnzr9oFGQNclFo')
