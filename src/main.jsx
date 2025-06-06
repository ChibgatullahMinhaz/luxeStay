import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { routes } from "./Routes/router";
import ThemeProvider from "./Store/Provider/ThemeProvider";
import "leaflet/dist/leaflet.css";
import AuthProvider from "./Store/Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
