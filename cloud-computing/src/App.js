import './App.css';
import React from "react";
import MapComponent from "./mapPage/mapComponent"
import DropDownComponent from './mapPage/dropDownComponent';
import RightMenuComponent from './mapPage/rightMenuComponent';

function App() {
  return (
    <div className="App"> 
      <RightMenuComponent></RightMenuComponent>
      <DropDownComponent></DropDownComponent>


      <MapComponent></MapComponent>
    </div>
  )
}

export default App;
