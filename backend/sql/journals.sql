-- Table: journals
create table if not exists journals (
   id uuid primary key default gen_random_uuid(),
   user_id uuid references auth.users not null,
   title text not null,
   content text,
   gear_list_id uuid references gear_lists,
   created_at timestamp with time zone default timezone('utc', now())
);
alter table journals enable row level security;
create policy "Users can CRUD their own journals" on journals for all using (auth.uid() = user_id);