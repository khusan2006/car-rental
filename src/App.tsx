import { Toaster } from "sonner";
import Home from "./pages/Home";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      clientId="QQxFev0eCMrDBUNj2TKGnt2P6DpQDj5i"
      domain="dev-spyv1wgxmqj1ta4h.us.auth0.com"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Home />
      <Toaster position="top-center" richColors />
    </Auth0Provider>
  );
}

export default App;
