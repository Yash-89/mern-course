import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider.jsx";
import { Toaster } from "@/components/ui/toaster.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider>
      <App />
      <Toaster />
    </Provider>
  </BrowserRouter>
);
