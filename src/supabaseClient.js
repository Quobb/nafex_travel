// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase credentials
const SUPABASE_URL = 'https://fnohazgdyvbqungpqdks.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZub2hhemdkeXZicXVuZ3BxZGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNTI2MzQsImV4cCI6MjA1OTkyODYzNH0.ywBcoKxeIwX2xKruixps9eu4k3HpVE8Wm6__iZjv_YA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
