import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./Components/Layout";
import { Home } from "./pages/Home";
import { Section2 } from "./Components/About/Section2";
import { Section3 } from "./Components/About/Section3";
import { Section4 } from "./Components/About/Section4";
import { Section5 } from "./Components/About/Section5";
import { Section6 } from "./Components/About/Section6";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/section2" element={< Section2/>}></Route>
        <Route path="/section3" element={< Section3/>}></Route>
        <Route path="/section4" element={< Section4/>}></Route>
        <Route path="/section5" element={< Section5/>}></Route>
        <Route path="/section6" element={< Section6/>}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
