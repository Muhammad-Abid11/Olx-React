import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Olx from '../../olx';
import Olxdetails from '../../views/OlxDetails';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Olx />,
    },
    {
        path: "/detail/:id",
        element: <Olxdetails />,
    },
]);

export default function Router() {
    return (<RouterProvider router={router} />)
}
