import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./Components/ProductListing";
import ProductDetails from "./Components/ProductDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/products" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;