import React from 'react'
import { createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login"
import Notfound from "../pages/Notfound"
import Studentlist from "../pages/Studentlist"
import Profile from "../pages/Profile"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/studentlist",
        element: <Studentlist />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "*",
        element: <Notfound />
    },
  ])

export default routers
