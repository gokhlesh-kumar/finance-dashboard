import { useMemo, useState } from "react";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider, createTheme, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./screens/Navbar";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <>
      <div className="app">
        <Router>
          <ThemeProvider theme={theme}>
            <Box width='100%' height='100%' p='1rem 2 rem 4rem 2rem' >
              <Navbar />
              <CssBaseline />
              <Routes>
                <Route path="/" element={<div>Home page</div>} />
                <Route path="/prediction" element={<div>Prediction page</div>} />
              </Routes>
            </Box>
          </ThemeProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
