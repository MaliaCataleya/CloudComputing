import "./App.css";
import React, { useState, useEffect } from "react";
import MapPageComponent from "./mapPage/mapPageComponent";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomeComponent from "./homePage/homeComponent";

function App() {
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
