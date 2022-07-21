import React, { useState, useEffect } from "react";
import MapComponent from "./mapComponent";
import LeftMenuComponent from "./leftMenuComponent";
import RightMenuComponent from "./rightMenuComponent";
import AppAPI from "../api/AppApi";

function MapPageComponent() {
  const [date, setDate] = useState({});
  const [locationChecked, setPlaceChecked] = useState(true);
  const [routeChecked, setRouteChecked] = useState(false);
  const [routes, setRoutes] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    var api = AppAPI.getAPI();
    api
      .getLocationsByDateAndSessionId(
        date,
        sessionStorage.getItem("sessionId")
      )
      .then((loc) => {
        setLocations(loc.docs);
      });
    api
      .getRoutesByDateAndSessionId(
        date,
        sessionStorage.getItem("sessionId")
      )
      .then((loc) => {
        setRoutes(loc.docs);
      });
  }, [date]);

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
      <MapComponent
        locations={locations}
        routes={routes}
        locationChecked={locationChecked}
        routeChecked={routeChecked}>
      </MapComponent>
    </div>
  );
}

export default MapPageComponent;
