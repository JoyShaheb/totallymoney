import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Error404,
  Eligibility,
  Products,
  CardSelectionPage,
} from "./Pages";
import Navbar from "./components/Navbar/Navbar";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const uiTheme: string = useSelector(
    (state: RootState) => state.uiSettings.theme
  );
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
