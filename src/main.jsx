import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { routes } from "./Routes/router";
import ThemeProvider from "./Store/Provider/ThemeProvider";
import "leaflet/dist/leaflet.css";
import AuthProvider from "./Store/Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllRoomsProvider from "./Store/Provider/AllRoomsProvider";
import ReviewsProvider from "./Store/Provider/ReviewsProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <ThemeProvider>
        <AllRoomsProvider>
          <ReviewsProvider>
            <AuthProvider>
              <RouterProvider router={routes} />
            </AuthProvider>
          </ReviewsProvider>
        </AllRoomsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
