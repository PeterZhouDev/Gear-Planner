-- Table: gear_lists
create table if not exists gear_lists (
   id uuid primary key default gen_random_uuid(),
   user_id uuid references auth.users not null,
   name text not null,
   description text,
   total_weight numeric,
   created_at timestamp with time zone default timezone('utc', now())
);
alter table gear_lists enable row level security;
create policy "Users can CRUD their own gear lists" on gear_lists for all using (auth.uid() = user_id);