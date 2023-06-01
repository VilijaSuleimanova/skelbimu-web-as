import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Login from "./Login"
import Register from "./Register"
import Admin from "./Admin"
import Home from "./Home"
import NewAd from "./NewAd"
import { Route, Routes } from "react-router-dom"



function App() {
  
  return (
   <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/newAd" element={<NewAd />} />
        </Routes>
      </div>
   </>
  );
}

export default App;
