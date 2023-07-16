import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tnrytgthwxgtntnkvjdu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRucnl0Z3Rod3hndG50bmt2amR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwOTIzNjgsImV4cCI6MjAwNDY2ODM2OH0.E0zdgFIDQy5I7XKwedZmDenxV8KmIjg4Ox0jEFk0x6A'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;