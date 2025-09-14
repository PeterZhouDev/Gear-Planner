import { NavLink } from '@/shared/ui/NavLink';
import { PageContainer } from '@/shared/ui/PageContainer';

export function HomePage() {
    return (
        <PageContainer>
            <h1 className="text-3xl font-bold text-night-accent mb-4">Welcome to Gear Plan</h1>
            <p className="mb-8 text-night-muted">
                Gear Plan helps you organize, pack, and share your outdoor gear lists and journals. Start by exploring your gear or building a new pack!
            </p>
            <nav aria-label="Main actions" className="mb-6">
                <ul className="flex flex-col gap-3">
                    <li><NavLink href="/gear-list">View Gear Items</NavLink></li>
                    <li><NavLink href="/packbuilder">Pack Builder</NavLink></li>
                    <li><NavLink href="/journal/create">Create Journal</NavLink></li>
                </ul>
            </nav>
            <nav aria-label="Explore">
                <ul className="flex flex-col gap-3">
                    <li><NavLink href="/explore/gear-lists">Explore Gear Lists</NavLink></li>
                    <li><NavLink href="/explore/journals">Explore Journals</NavLink></li>
                </ul>
            </nav>
        </PageContainer>
    );
}