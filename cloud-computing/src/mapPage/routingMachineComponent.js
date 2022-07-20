import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(49.4872210, 8.4675010),
      L.latLng(49.4785810, 8.4965060)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;