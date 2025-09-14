import { Router, Route, LocationProvider } from "preact-iso/router";
import { HomePage } from "@/pages/Home";
import { NotFoundPage } from "@/pages/NotFound";
import { GearListPage } from "@/pages/GearList/GearList";
import { PackBuilder } from "@/pages/PackBuilder/PackBuilder";
import { Header } from "@/shared/ui/Header";

// Placeholder components for explore pages (replace with real ones when implemented)
const ExploreGearLists = () => <div>Explore Gear Lists Page</div>;
const ExploreJournals = () => <div>Explore Journals Page</div>;

export function App() {
  return (
    <LocationProvider>
      <div className="min-h-screen bg-night-bg text-night-text font-sans">
        <Header />
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/gear-list" component={GearListPage} />
          <Route path="/packbuilder" component={PackBuilder} />
          {/* <Route path="/journal/create" component={CreateJournal} /> */}
          <Route path="/explore/gear-lists" component={ExploreGearLists} />
          <Route path="/explore/journals" component={ExploreJournals} />
          <Route default component={NotFoundPage} />
        </Router>
      </div>
    </LocationProvider>
  );
}