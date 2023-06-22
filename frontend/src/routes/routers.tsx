import React from 'react'
import { createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login"
import Notfound from "../pages/Notfound"


const routers = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "*",
        element: <Notfound />
    },
  ])

export default routers
