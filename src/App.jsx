import { QueryClientProvider, QueryClient } from "react-query";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import OverviewPage from "./components/pages/OverviewPage/OverviewPage";
import PeoplePage from "./components/pages/PeoplePage/PeoplePage";
import StarshipsPage from "./components/pages/StarshipPage/StarshipPage";
import { AppContextProvider } from "./Context";
import SpeciesPage from "./components/pages/SpeciesPage/SpeciesPage";

function App() {
  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
        <Router>
        <AppContextProvider>
          <Routes>
            <Route path="/">
              <Route index element={<Navigate to="/login" replace />} />
              <Route path="/dashboard/overview" element={<OverviewPage />} />
              <Route path="/dashboard/people" element={<PeoplePage />} />
              <Route path="/dashboard/starships" element={<StarshipsPage />} />
              <Route path="/dashboard/species" element={<SpeciesPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          </AppContextProvider>
        </Router>
      </QueryClientProvider>
      
  );
}

export default App;
