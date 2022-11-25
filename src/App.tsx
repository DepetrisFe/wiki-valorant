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
import Error from "./pages/error";
import Home from "./pages/home";
import { agentsLoader, agentDetailLoader } from "./loaders/agents";
import { weaponsLoader } from "./loaders/weapons";

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
      <Route path="/buddies" element={<Buddies />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/sprays" element={<Sprays />} />
      <Route path="/weapons" element={<Weapons />} loader={weaponsLoader} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
