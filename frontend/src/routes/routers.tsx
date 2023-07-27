// import React from 'react'
import { createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login"
import Notfound from "../pages/Notfound"
import Studentlist from "../pages/Studentlist"
import Profile from "../pages/Profile"
import Subject from "../pages/Subject"
import Calculatemiss from "../pages/Calculatemiss"
import Signup from "../pages/Signup"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/studentlist",
        element: <Studentlist/>
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/subject",
        element: <Subject />
    },
    {
        path: "/calculatemiss",
        element: <Calculatemiss />
    },
    {
        path: "*",
        element: <Notfound />
    },
  ])

export default routers
