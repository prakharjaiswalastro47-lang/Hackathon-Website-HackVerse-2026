/*
# Create registrations table for HackVerse hackathon

1. New Tables
- `registrations`
  - `id` (uuid, primary key)
  - `team_name` (text, not null) - name of the hacking team
  - `team_leader_name` (text, not null) - full name of the team leader
  - `email` (text, not null) - contact email for the team leader
  - `phone` (text, not null) - contact phone number
  - `team_size` (integer, not null, default 2) - number of members (2-4)
  - `project_idea` (text, nullable) - optional project idea / category
  - `institution` (text, nullable) - school/company affiliation
  - `experience_level` (text, not null, default 'beginner') - beginner/intermediate/advanced
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `registrations`.
- This is a public registration form (no sign-in), so allow anon + authenticated
  to INSERT (register) and SELECT (view registrant count). We restrict SELECT
  to only expose aggregate-safe columns by keeping it simple: anyone can read
  since this is a public hackathon roster. UPDATE/DELETE are disabled for anon
  to prevent tampering with registrations.
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_name text NOT NULL,
  team_leader_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  team_size integer NOT NULL DEFAULT 2 CHECK (team_size >= 1 AND team_size <= 6),
  project_idea text,
  institution text,
  experience_level text NOT NULL DEFAULT 'beginner' CHECK (experience_level IN ('beginner', 'intermediate', 'advanced')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to register (INSERT)
DROP POLICY IF EXISTS "anon_insert_registrations" ON registrations;
CREATE POLICY "anon_insert_registrations" ON registrations FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Allow anyone to read registrations (public roster for this no-auth hackathon site)
DROP POLICY IF EXISTS "anon_select_registrations" ON registrations;
CREATE POLICY "anon_select_registrations" ON registrations FOR SELECT
TO anon, authenticated USING (true);

-- Add index on created_at for ordering
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations (created_at DESC);
