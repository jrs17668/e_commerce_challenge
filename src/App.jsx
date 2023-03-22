import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Products from "./Components/Products";
import SiteNav from "./Components/SiteNav";
import Home from "./Components/Home";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <SiteNav />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/product" element={<Products></Products>}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
