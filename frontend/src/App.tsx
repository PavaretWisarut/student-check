import * as React from "react";
// import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/routers";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Belanosima, sans-serif'
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routers}></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
