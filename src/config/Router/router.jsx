import React, { useEffect, useState } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate

} from "react-router-dom";

import Olx from '../../olx';
import Olxdetails from '../../views/OlxDetails';
import SellPage from '../../views/sellPage';
import Myads from '../../views/myads';
import Mymap from '../../components/mapBox';

import { onAuthStateChanged, auth } from '../firebase/firebase';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Olx />,
            },
            {
                path: "/sell",
                element: <SellPage />,
            },
            {
                path: "/map",
                element: <Mymap />,
            },
            {
                path: "/detail/:id",
                element: <Olxdetails />,
            },
            {
                path: "/myads",
                element: <Myads />,
            },
        ]
    }]);
function Layout() {
    const [user, setUser] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)

        });
    }, [])

    useEffect(() => {
        const path = window.location.pathname
        if (!user) {
            if (path === "/sell" || path === "/myads") {
                navigate('/')
            }
        }
    }, [window.location.pathname, user])

    // if (loading) return <div>Loading...</div>

    return (
        <>
            <Outlet />

        </>
    )
}

export default function Router() {
    return (<RouterProvider router={router} />)
}
