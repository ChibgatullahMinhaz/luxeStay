import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout ></Mainlayout>,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])