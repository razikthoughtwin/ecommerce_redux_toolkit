import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./component/ProductListing";
import Cart from "./component/Cart";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div className="main_container"><ProductListing/></div>}/>  
        <Route path="/cart" element={<Cart/>}/>  
      </Routes>    
    </div>
  );
}

export default App;
