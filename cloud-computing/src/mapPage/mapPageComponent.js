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
  const [center, setCenter] = useState([])

  useEffect(() => {
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
      });
    api
      .getRoutesByDateAndSessionId(
        date,
        sessionStorage.getItem("sessionId")
      )
      .then((loc) => {
        if (loc.docs.length > 0) {
          setRoutes(loc.docs);
        }
      });
  }, [date]);

  useEffect(() => {
    if(locations.length > 0){
      setCenter([locations[0].locationJson.latitudeE7 * 0.0000001, locations[0].locationJson.longitudeE7 * 0.0000001])
    }
    else if(routes.length > 0){
      setCenter([routes[0].routeJson.startLocation.latitudeE7 * 0.0000001, routes[0].routeJson.startLocation.longitudeE7 * 0.0000001])
    }
    else {
      setCenter([48.7758459, 9.1829321])
    }
  }, [routes, locations]);

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
        routeChecked={routeChecked}
        center={center}>
      </MapComponent>
    </div>
  );
}

export default MapPageComponent;
