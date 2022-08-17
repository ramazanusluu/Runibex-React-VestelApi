import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Categories";
import SubCategories from "./components/SubCategories/SubCategories";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/category/:category_id" element={<SubCategories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
