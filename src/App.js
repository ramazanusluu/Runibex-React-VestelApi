import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Loading />} />
      </Routes>
    </div>
  );
}

export default App;
