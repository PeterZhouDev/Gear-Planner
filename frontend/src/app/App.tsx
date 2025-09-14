import { Router, Route, LocationProvider } from "preact-iso/router";
import { HomePage } from "@/pages/Home";
import { NotFoundPage } from "@/pages/NotFound";
import { GearListPage } from "@/pages/GearList/GearList";

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/gear-list" component={GearListPage} />
        <Route default={true} component={NotFoundPage} />
      </Router>
    </LocationProvider>
  );
}