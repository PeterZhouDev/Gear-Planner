-- Example seed data for gear_items
insert into gear_items (
      id,
      user_id,
      name,
      weight,
      category,
      image_url,
      created_at
   )
values (
      gen_random_uuid(),
      '38a1cc3a-7fa7-4ad9-8298-f4754ebc6903',
      'Ultralight Tent',
      900,
      'Shelter',
      null,
      timezone('utc', now())
   ),
   (
      gen_random_uuid(),
      '38a1cc3a-7fa7-4ad9-8298-f4754ebc6903',
      'Sleeping Bag',
      600,
      'Sleep System',
      null,
      timezone('utc', now())
   ),
   (
      gen_random_uuid(),
      '38a1cc3a-7fa7-4ad9-8298-f4754ebc6903',
      'Backpack',
      1200,
      'Pack',
      null,
      timezone('utc', now())
   );
-- Example seed data for gear_lists
insert into gear_lists (
      id,
      user_id,
      name,
      description,
      total_weight,
      created_at
   )
values (
      gen_random_uuid(),
      '38a1cc3a-7fa7-4ad9-8298-f4754ebc6903',
      'Weekend Trip',
      'A basic ultralight setup for a weekend.',
      2700,
      timezone('utc', now())
   );
-- Example seed data for journals
insert into journals (
      id,
      user_id,
      title,
      content,
      gear_list_id,
      created_at
   )
values (
      gen_random_uuid(),
      '38a1cc3a-7fa7-4ad9-8298-f4754ebc6903',
      'First Trip',
      'Excited for my first ultralight hike!',
      (
         select id
         from gear_lists
         limit 1
      ), timezone('utc', now())
   );
-- Example seed data for comments
insert into comments (id, user_id, journal_id, content, created_at)
values (
      gen_random_uuid(),
      '38a1cc3a-7fa7-4ad9-8298-f4754ebc6903',
      (
         select id
         from journals
         limit 1
      ), 'Good luck and have fun!', timezone('utc', now())
   );