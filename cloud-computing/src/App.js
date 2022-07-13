import './App.css';
import React, { useState, useEffect } from "react";
import MapComponent from "./mapPage/mapComponent"
import DropDownComponent from './mapPage/dropDownComponent';
import RightMenuComponent from './mapPage/rightMenuComponent';

function App() {
  const [date, setDate] = useState("");
  
  useEffect(() => {
    console.log(date)
  })

  return (
    <div className="App"> 
      <RightMenuComponent></RightMenuComponent>
      <DropDownComponent setDate = {setDate}></DropDownComponent>
      <MapComponent></MapComponent>
    </div>
  )
}

export default App;
