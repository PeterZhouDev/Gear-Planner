import { useEffect, useState } from 'preact/hooks';
import { supabase } from '@/shared/api/';

export function HomePage() {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchItems() {
            const { data, error } = await supabase.from('gear_items').select('*');
            console.log('data:', data, 'error:', error); // Add this line
            if (!error) setItems(data || []);
            setLoading(false);
        }
        fetchItems();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Welcome to Gear Plan</h1>
            <a href="/gear-list">View Gear Items</a>
        </div>
    );
}