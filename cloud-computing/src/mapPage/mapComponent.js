import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-routing-machine";
import RoutingMachine from "./routingMachineComponent";

function MapComponent(props) {

  //highlight days that have data in calender??, grey out locations and routes if no data for either is available
  //route start and end time in popup
  //random color for routes
  //center location wrong??


  const dataAvailable = () => {
    console.log(props.center)
    if (props.locations.length > 0 || props.routes.length > 0) {
      return true
    }
    else {
      return false
    }
  }

  return (
    <div>
      {dataAvailable() ? (
        <MapContainer
          center={props.center}
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
                  endLocation={route.routeJson.endLocation}>
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
