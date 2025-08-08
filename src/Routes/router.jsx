import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Rooms from "../pages/Rooms";
import MyBookings from "../pages/MyBookings";
import RoomDetails from "../pages/RoomDetails";
import PrivetRoutes from "./PrivetRoutes";
import AboutUs from "../pages/AboutUs";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/roomsDetails/:id",
        element: <RoomDetails />,
      },
      {
        path: "/bookings",
        element: (
          <PrivetRoutes>
            <MyBookings />
          </PrivetRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
