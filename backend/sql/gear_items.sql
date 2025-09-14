-- Table: gear_items
create table if not exists gear_items (
   id uuid primary key default gen_random_uuid(),
   user_id uuid references auth.users not null,
   name text not null,
   weight numeric not null,
   category text,
   image_url text,
   created_at timestamp with time zone default timezone('utc', now())
);
alter table gear_items enable row level security;
create policy "Users can CRUD their own gear items" on gear_items for all using (auth.uid() = user_id);