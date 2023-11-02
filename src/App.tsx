import { useMemo, useState } from "react";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./screens/Navbar";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <>
      <div className="app">
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" />
            </Routes>
          </Router>
          <CssBaseline />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
