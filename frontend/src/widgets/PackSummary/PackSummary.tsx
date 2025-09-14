import type { GearItem } from '@/entities/';
import { Card } from '@/shared/ui/Card';

export function PackSummary({ items, selected }: { items: GearItem[]; selected: string[] }) {
  const totalWeight = items
    .filter(item => selected.includes(item.id))
    .reduce((sum, item) => sum + item.weight, 0);

  return (
    <Card className="mt-4 text-night-highlight font-semibold text-lg bg-night-bg">
      Total weight: {totalWeight}g ({(totalWeight / 1000).toFixed(2)}kg)
    </Card>
  );
}