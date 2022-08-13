import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

  //route start and end time in popup

const createRoutineMachineLayer = (props) => {
  console.log(props)
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(props.startLocation.latitudeE7*0.0000001, props.startLocation.longitudeE7*0.0000001),
      L.latLng(props.endLocation.latitudeE7*0.0000001, props.endLocation.longitudeE7*0.0000001)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    collapsible: false,
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    createMarker: function (i, waypoint, nWps) {
      if(i === 0){
        return L.marker(waypoint.latLng).bindPopup("Route Start: " + props.startMarkerText);
      }
      else if (i === nWps - 1){
        return L.marker(waypoint.latLng).bindPopup("Route End: " + props.endMarkerText);
      }
      else {
        return L.marker(waypoint.latLng)
      }
    }
  });

  return instance;

}

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;