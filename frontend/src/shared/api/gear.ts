import { supabase } from './supabaseClient';
import type { GearItem } from '@/entities/';

// Get all gear items
export async function getGearItems() {
  return supabase.from('gear_items').select('*');
}

// Add a new gear item
export async function addGearItem(item: Partial<GearItem>) {
  return supabase.from('gear_items').insert([item]);
}

// Update a gear item by id
export async function updateGearItem(id: string, updates: Partial<GearItem>) {
  return supabase.from('gear_items').update(updates).eq('id', id);
}

// Delete a gear item by id
export async function deleteGearItem(id: string) {
  return supabase.from('gear_items').delete().eq('id', id);
}