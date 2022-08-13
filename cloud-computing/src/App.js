import "./App.css";
import React, { useState, useEffect } from "react";
import MapPageComponent from "./mapPage/mapPageComponent";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomeComponent from "./homePage/homeComponent";
import { v4 as uuidv4 } from 'uuid';

function App() {

  useEffect(() => {
    sessionStorage.setItem("sessionId", uuidv4());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeComponent />} />
        <Route path="map" element={<MapPageComponent />} />
      </Routes>
      {/* <div className="App">
      <MapPageComponent></MapPageComponent>
      </div> */}
      <Outlet></Outlet>
    </BrowserRouter>
  );
}

export default App;
