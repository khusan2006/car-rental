import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Models from "./pages/Models";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

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
         <Route path="/" element={<Layout />}>
         <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
         </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
