import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductDetails";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router basename="/e-commerce-react-zustand">
      <ScrollToTop />
      <Navbar />

      <div className="max-w-7xl mx-auto flex gap-6 w-full">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
