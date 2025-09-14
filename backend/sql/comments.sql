-- Table: comments
create table if not exists comments (
   id uuid primary key default gen_random_uuid(),
   user_id uuid references auth.users not null,
   journal_id uuid references journals not null,
   content text not null,
   created_at timestamp with time zone default timezone('utc', now())
);
alter table comments enable row level security;
create policy "Users can CRUD their own comments" on comments for all using (auth.uid() = user_id);