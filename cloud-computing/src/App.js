import "./App.css";
import React, { useState, useEffect } from "react";
import MapComponent from "./mapPage/mapComponent";
import DropDownComponent from "./mapPage/dropDownComponent";
import RightMenuComponent from "./mapPage/rightMenuComponent";
import AppAPI from "./api/AppApi";

function App() {
  const [date, setDate] = useState("");
  const [placeChecked, setPlaceChecked] = useState(false);
  const [rangeChecked, setRangeChecked] = useState(false);
  const [routes, setRoutes] = useState(null);


  useEffect(() => {
    console.log(date, placeChecked, rangeChecked);
    if(rangeChecked === true){
      var api = AppAPI.getAPI()
      setRoutes(api.getRoutesByDate(date))
    }
  }, [date, placeChecked, rangeChecked]);

  return (
    <div className="App">
      <RightMenuComponent></RightMenuComponent>
      <DropDownComponent
        setDate={setDate}
        setRangeChecked={setRangeChecked}
        setPlaceChecked={setPlaceChecked}
        placeChecked={placeChecked}
        rangeChecked={rangeChecked}
      ></DropDownComponent>
      <MapComponent></MapComponent>
    </div>
  );
}

export default App;
