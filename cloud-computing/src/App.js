import './App.css';
import React from "react";
import MapComponent from "./mapPage/mapComponent"
import RightMenuComponent from './mapPage/rightMenuComponent';

function App() {
  return (
    <div className="App">
      <RightMenuComponent></RightMenuComponent>
      <MapComponent></MapComponent>
    </div>
  )


}

export default App;
