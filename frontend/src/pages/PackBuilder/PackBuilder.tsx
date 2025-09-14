import { useState } from 'preact/hooks';
import { PackSelector } from '@/features/PackBuilder/';
import { PackSummary } from '@/widgets/PackSummary/';
import type { GearItem } from '@/entities/';

export function PackBuilder() {
  const [selected, setSelected] = useState<string[]>([]);
  const [items, setItems] = useState<GearItem[]>([]);

  return (
    <div className="max-w-xl mx-auto p-4 bg-night-surface rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4 text-night-accent">Pack Builder</h2>
      <PackSelector selected={selected} setSelected={setSelected} setItems={setItems} />
      <PackSummary items={items} selected={selected} />
    </div>
  );
}