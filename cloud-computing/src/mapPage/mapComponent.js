import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-routing-machine";
import RoutingMachine from "./routingMachineComponent";

function MapComponent(props) {

  //highlight days that have data in calender??, grey out locations and routes if no data for either is available
  //center location wrong??

  const [center, setCenter] = useState([48.7758459, 9.1829321])

  const dataAvailable = () => {
    if(props.locations !== undefined){
      if (props.locations.length > 0 || props.routes.length > 0) {
        return true
      }
      else {
        return false
      }
    }
  }

  useEffect(() => {
    if (props.locations.length > 0) {
      setCenter([props.locations[0].locationJson.latitudeE7 * 0.0000001, props.locations[0].locationJson.longitudeE7 * 0.0000001])
    }
    else if (props.routes.length > 0) {
      setCenter([props.routes[0].routeJson.startLocation.latitudeE7 * 0.0000001, props.routes[0].routeJson.startLocation.longitudeE7 * 0.0000001])
    }
    else {
      setCenter([48.7758459, 9.1829321])
    }
  }, [props]);

  return (
    <div>
      {dataAvailable() ? (
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {props.routeChecked &&
            props.routes.map((route) => {
              return (
                <RoutingMachine
                  key={route.routeJson.startLocation.latitudeE7}
                  startLocation={route.routeJson.startLocation}
                  endLocation={route.routeJson.endLocation}
                  startMarkerText={route.routeJson.duration.startTimestamp.substr(11, 5)}
                  endMarkerText={route.routeJson.duration.endTimestamp.substr(11, 5)}>
                </RoutingMachine>)
            })}
          {props.locationChecked &&
            props.locations.map((loc) => {
              return (
                <Marker
                  key={loc.locationJson.latitudeE7}
                  position={[
                    loc.locationJson.latitudeE7 * 0.0000001,
                    loc.locationJson.longitudeE7 * 0.0000001,
                  ]}
                >
                  <Popup>{loc.locationJson.name}</Popup>
                </Marker>
              );
            })}
        </MapContainer>
      )
        :
        <div>Select a date in the left menu, which has location data and select locations or routes</div>}
    </div>
  );
}

export default MapComponent;
