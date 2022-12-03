import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import Agents from "./pages/agents";
import AgentDetail from "./pages/agentDetail";
import Buddies from "./pages/buddies";
import Cards from "./pages/cards";
import Maps from "./pages/maps";
import Sprays from "./pages/sprays";
import Weapons from "./pages/weapons/intex";
import WeaponDetail from "./pages/weaponDetail";
import Error from "./pages/error";
import Home from "./pages/home";
import { agentsLoader, agentDetailLoader } from "./loaders/agents";
import { weaponsLoader, weaponDetailLoader } from "./loaders/weapons";
import { cardsLoader } from "./loaders/cards";
import { buddiesLoader } from "./loaders/buddies";
import { spraysLoader } from "./loaders/sprays";
import { mapsLoader } from "./loaders/maps";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/agents" element={<Agents />} loader={agentsLoader} />
      <Route
        path="/agents/:id"
        element={<AgentDetail />}
        loader={agentDetailLoader}
      />
      <Route path="/buddies" element={<Buddies />} loader={buddiesLoader} />
      <Route path="/cards" element={<Cards />} loader={cardsLoader} />
      <Route path="/maps" element={<Maps />} loader={mapsLoader} />
      <Route path="/sprays" element={<Sprays />} loader={spraysLoader} />
      <Route path="/weapons" element={<Weapons />} loader={weaponsLoader} />
      <Route
        path="/weapons/:id"
        element={<WeaponDetail />}
        loader={weaponDetailLoader}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
