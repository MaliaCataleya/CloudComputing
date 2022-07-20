import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-routing-machine";
import RoutingMachine from "./routingMachineComponent";

function MapComponent(props) {

  //highlight days that have data in calender?????

  return (
    <div>
      {props.locations ? (
        <MapContainer
          center={[
            props.locations[0].locationJson.latitudeE7 * 0.0000001,
            props.locations[0].locationJson.longitudeE7 * 0.0000001,
          ]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* {props.routes.map((route) => {
            
          })} */}
          <RoutingMachine></RoutingMachine>
          {props.locations.map((loc) => {
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
