import React, { useState, useEffect } from "react";
import MapComponent from "./mapComponent";
import LeftMenuComponent from "./leftMenuComponent";
import RightMenuComponent from "./rightMenuComponent";
import AppAPI from "../api/AppApi";

function MapPageComponent() {
  const [date, setDate] = useState({});
  const [locationChecked, setPlaceChecked] = useState(true);
  const [routeChecked, setRouteChecked] = useState(false);
  const [routes, setRoutes] = useState(null);
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    if (locationChecked === true) {
      var api = AppAPI.getAPI();
      api
        .getLocationsByDateAndSessionId(
          date,
          sessionStorage.getItem("sessionId")
        )
        .then((loc) => {
          console.log(loc)
          if (loc.docs.length > 0) {
            setLocations(loc.docs);
          }
          else {
            setLocations(null)
          }
        });
    }
    if (routeChecked === true) {
      var api = AppAPI.getAPI();
      api
        .getRoutesByDateAndSessionId(
          date,
          sessionStorage.getItem("sessionId")
        )
        .then((loc) => {
          console.log(loc)
          if (loc.docs.length > 0) {
            setRoutes(loc.docs);
          }
          else {
            setRoutes(null)
          }
        });
    }
    else if (locationChecked === false) {
      setLocations(null)
    }
    else if (routeChecked === false) {
      setRoutes(null)
    }
  }, [date, locationChecked, routeChecked]);

  useEffect(() => {
    console.log(locations);
  }, [locations]);

  return (
    <div className="App">
      <RightMenuComponent locations={locations}></RightMenuComponent>
      <LeftMenuComponent
        setDate={setDate}
        setRangeChecked={setRouteChecked}
        setPlaceChecked={setPlaceChecked}
        placeChecked={locationChecked}
        rangeChecked={routeChecked}
      ></LeftMenuComponent>
      <MapComponent locations={locations}></MapComponent>
    </div>
  );
}

export default MapPageComponent;
