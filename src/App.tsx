import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Eligibility from "./Pages/Eligibility";
import Products from "./Pages/Products";
import PageNotFound from "./Pages/PageNotFound";
import Footer from "./components/footer/Footer";
import CardSelection from "./Pages/CardSelection";

let App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cardselection" element={<CardSelection />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
