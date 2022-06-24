import './App.css';
import React from "react";
import MapComponent from "./mapPage/mapComponent"
import DropDownComponent from './mapPage/dropDownComponent';
import RightMenuComponent from './mapPage/rightMenuComponent';
import { Navbar } from "react-bootstrap"

function App() {
  return (
    <div className="App"> 
    <div className='justify-content-between flex'>
      <RightMenuComponent></RightMenuComponent>
      <DropDownComponent></DropDownComponent>
    </div>


      <MapComponent></MapComponent>
    </div>
  )
}

export default App;
