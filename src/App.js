import React from 'react';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Map from "./pages/Map";
import Home from "./pages/Home";

function App() {
  return (
      <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="*" element={<NotFound />}></Route>
      </Routes>
  );
}

export default App;
