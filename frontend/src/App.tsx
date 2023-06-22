import * as React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/routers"

function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
