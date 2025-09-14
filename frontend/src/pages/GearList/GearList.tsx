import { useEffect, useState } from 'preact/hooks';
import { supabase } from '@/shared/api/';

export function GearListPage() {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchItems() {
            const { data, error } = await supabase.from('gear_items').select('*');
            if (!error) setItems(data || []);
            setLoading(false);
        }
        fetchItems();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Gear Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <strong>{item.name}</strong>
                        {item.description && (
                            <div>{item.description}</div>
                        )}
                        {item.weight !== undefined && item.weight !== null && (
                            <div>Weight: {item.weight}</div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}