# GearPlan Backend

This folder contains SQL schema, seed data, and setup instructions for the GearPlan app using Supabase/Postgres.

## Setup

1. **Create a Supabase project** at [app.supabase.com](https://app.supabase.com).

2. **Configure environment variables:**

   - Copy `.env.example` to `.env` and fill in your Supabase credentials.

3. **Create tables:**

   - Use the SQL files in `/sql` to create tables:
     - `gear_items.sql`
     - `gear_lists.sql`
     - `journals.sql`
     - `comments.sql`

4. **Seed data (optional):**
   - Run `seed.sql` in the Supabase SQL editor to add sample data.

## Files

- `sql/` — SQL files for schema and seeding
- `.env.example` — Example environment variables

## More

- See `README_supabase_setup.md` for detailed Supabase setup.
- See `README_CRUD.md` for CRUD operation examples.
