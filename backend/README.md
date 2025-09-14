# Backend Structure for Ultralight Hiker’s Gear Planner

## Folders

- `sql/` – All SQL scripts for tables and policies (one file per entity)
- `migrations/` – (Optional) For versioned migration scripts
- `.env` – Environment variables (never commit secrets)
- `README_CRUD.md` – CRUD and onboarding instructions
- `README_supabase_setup.md` – Supabase setup guide

## Onboarding Steps

1. Read `README_supabase_setup.md` to set up your Supabase project.
2. Use the SQL files in `sql/` to create tables and policies via the Supabase SQL editor.
3. See `README_CRUD.md` for CRUD usage and integration tips.
4. Add new SQL files for new entities as the project grows.

## Best Practices

- Keep all schema and policy changes in `sql/` for easy review and onboarding.
- Document any manual steps in the README files.
- Use migrations for production projects.
