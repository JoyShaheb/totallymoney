import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Error404, Eligibility, Products } from "./Pages";
import Navbar from "./components/Navbar/Navbar";
import CardSelectionPage from "./Pages/CardSelectionPage";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";

const App = () => {
  const uiTheme = useSelector((state: any) => state.uiSettings.theme);
  return (
    <ThemeProvider theme={theme(uiTheme)}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/card-select" element={<CardSelectionPage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
