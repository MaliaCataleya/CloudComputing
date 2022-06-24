import './App.css';
import React from "react";
import MapComponent from "./mapPage/mapComponent"
import { Dropdown } from 'bootstrap';
import DropDownComponent from './mapPage/dropDownComponent';

function App() {
  return (
    <div className="App">
      <MapComponent></MapComponent>
      <DropDownComponent></DropDownComponent>
    </div>
  )


}

export default App;
