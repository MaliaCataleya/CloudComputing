import './App.css';
import React from "react";
import MapComponent from "./mapPage/mapComponent"
import DropDownComponent from './mapPage/dropDownComponent';
import RightMenuComponent from './mapPage/rightMenuComponent';
import { Navbar } from "react-bootstrap"

function App() {
  return (
    <div className="App"> 
    <Navbar key={false} bg="light" expand={false} className="mb-3 ">
      <RightMenuComponent></RightMenuComponent>
      <DropDownComponent></DropDownComponent>
    </Navbar>
      <MapComponent></MapComponent>
    </div>
  )


}

export default App;
