import { useState, useEffect } from 'preact/hooks';
import { getGearItems } from '@/shared/api/';
import type { GearItem } from '@/entities/';

interface PackSelectorProps {
  selected: string[];
  setSelected: (ids: string[]) => void;
  setItems: (items: GearItem[]) => void;
}

export function PackSelector({ selected, setSelected, setItems }: PackSelectorProps) {
  const [items, setLocalItems] = useState<GearItem[]>([]);

  useEffect(() => {
    getGearItems().then(({ data }) => {
      setLocalItems(data || []);
      setItems(data || []);
    });
  }, [setItems]);

  return (
    <ul className="space-y-2">
      {items.map(item => (
        <li key={item.id} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selected.includes(item.id)}
            onChange={e => {
              setSelected(
                e.currentTarget.checked
                  ? [...selected, item.id]
                  : selected.filter(id => id !== item.id)
              );
            }}
            className="accent-yellow-500"
          />
          <span>
            {item.name} <span className="text-gray-400">({item.weight}g)</span>
          </span>
        </li>
      ))}
    </ul>
  );
}