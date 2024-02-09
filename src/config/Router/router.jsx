import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Olx from '../../olx';
import Olxdetails from '../../views/OlxDetails';
import SellPage from '../../views/sellPage';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Olx />,
    },
    {
        path: "/sell",
        element: <SellPage />,
    },
    {
        path: "/detail/:id",
        element: <Olxdetails />,
    },
]);

export default function Router() {
    return (<RouterProvider router={router} />)
}
