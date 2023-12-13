import "./App.css";
import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import SidessBar from "./Component/SidessBar";
import ViewVideo from "./Component/ViewVideo";
import Landing from "./Component/pages/Landing";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/SidessBar" element={<NavBar />} />
        <Route path="/ViewVideo/:id" element={<ViewVideo />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
