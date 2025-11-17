import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./pages/Home";
import CarsCollection from "./pages/CarsCollection";
import CarDetails from "./pages/CarDetails";
import "./i18n/config";

function App() {
  return (
    <Auth0Provider
      clientId="QQxFev0eCMrDBUNj2TKGnt2P6DpQDj5i"
      domain="dev-spyv1wgxmqj1ta4h.us.auth0.com"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarsCollection />} />
          <Route path="/cars/:id" element={<CarDetails />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
