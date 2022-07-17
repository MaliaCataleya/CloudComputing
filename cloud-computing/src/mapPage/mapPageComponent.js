import React, { useState, useEffect } from "react";
import MapComponent from "./mapComponent";
import LeftMenuComponent from "./leftMenuComponent";
import RightMenuComponent from "./rightMenuComponent";
import AppAPI from "../api/AppApi";

function MapPageComponent() {
  const [date, setDate] = useState({});
  const [locationChecked, setPlaceChecked] = useState(true);
  const [rangeChecked, setRangeChecked] = useState(false);
  const [routes, setRoutes] = useState(null);
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    console.log(date, locationChecked, rangeChecked);
    if (locationChecked === true) {
      var api = AppAPI.getAPI();
      api
        .getLocationsByDateAndSessionId(
          date,
          sessionStorage.getItem("sessionId")
        )
        .then((loc) => {
          if (loc.docs.length > 0) {
            setLocations(loc.docs);
          }
        });
    }
  }, [date, locationChecked, rangeChecked]);

  useEffect(() => {
    console.log(locations);
  }, [locations]);

  return (
    <div className="App">
      <RightMenuComponent></RightMenuComponent>
      <LeftMenuComponent
        setDate={setDate}
        setRangeChecked={setRangeChecked}
        setPlaceChecked={setPlaceChecked}
        placeChecked={locationChecked}
        rangeChecked={rangeChecked}
      ></LeftMenuComponent>
      <MapComponent locations={locations}></MapComponent>
    </div>
  );
}

export default MapPageComponent;
