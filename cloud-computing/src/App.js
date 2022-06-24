import './App.css';
import React from "react";
import MapComponent from "./mapPage/mapComponent"
import { Dropdown } from 'bootstrap';
import DropDownComponent from './mapPage/dropDownComponent';
import RightMenuComponent from './mapPage/rightMenuComponent';

function App() {
  return (
    <div className="App">
<RightMenuComponent></RightMenuComponent>
      <MapComponent></MapComponent>
      <DropDownComponent></DropDownComponent>
    </div>
  )


}

export default App;
