import React, { useState, useEffect } from "react";
import MapComponent from "./mapComponent";
import LeftMenuComponent from "./leftMenuComponent";
import RightMenuComponent from "./rightMenuComponent";
import AppAPI from "../api/AppApi";

function MapPageComponent() {
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
      <LeftMenuComponent
        setDate={setDate}
        setRangeChecked={setRangeChecked}
        setPlaceChecked={setPlaceChecked}
        placeChecked={placeChecked}
        rangeChecked={rangeChecked}
      ></LeftMenuComponent>
      <MapComponent></MapComponent>
    </div>
  );
}

export default MapPageComponent;
