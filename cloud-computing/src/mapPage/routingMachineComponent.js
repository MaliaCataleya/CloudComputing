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
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;

}

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;