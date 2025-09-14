## Setup

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Configure environment variables:**

   - Copy `.env.example` to `.env` and fill in your Supabase project URL and anon key.

3. **Run the app:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

## Features

- Gear list management
- Journaling
- Colorblind-friendly, accessible UI
- Supabase authentication and data

## Project Structure

```
src/
  app/        # App entry and routing
  entities/   # Domain models
  features/   # Business features
  pages/      # Route-level pages
  shared/     # Shared UI, assets, API
  widgets/    # Page sections
```

## Styling

- Uses [Tailwind CSS](https://tailwindcss.com/) with a colorblind-friendly palette.
- See `src/index.css` for custom variables and resets.

## Environment Variables

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

(See `.env.example`)

## License

MIT
