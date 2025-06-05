import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Auth/Login";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout ></Mainlayout>,
        children: [
            {
                index: true,
                element: <Home />
            },{
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])