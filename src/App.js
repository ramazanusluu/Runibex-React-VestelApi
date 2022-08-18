import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Categories";
import SubCategories from "./components/SubCategories/SubCategories";
import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Error404 from "./components/Error/Error404";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/category/:category_id" element={<SubCategories />} />
          <Route path="/products/:product_id" element={<Products />} />
          <Route
            path="/products/:product_id/product-detail/:product"
            element={<ProductDetail />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
