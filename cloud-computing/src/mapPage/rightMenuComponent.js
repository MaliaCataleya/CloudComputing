import React, { useState, useEffect } from "react";
import { Navbar, Offcanvas, Nav } from "react-bootstrap";

function RightMenuComponent(props) {

  const [transportations, setTransportation] = useState({});

  const listItemsTransportation = Object.entries(transportations).map(
    ([key, value]) => (
      <li key={key}>
        {key}: {value}m
      </li>
    )
  );
  
  useEffect(() => {
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  
    const renameKeys = (obj) => {
      var modifiedJson = {}
      for (let key in obj){
        let newKey = key.replaceAll("_", " ").toLowerCase()
        newKey = capitalizeFirstLetter(newKey)
        modifiedJson[newKey] = obj[key];
      }
      return modifiedJson
    }

    let transportationJSON = {}
    for (let route of props.routes){
      if(transportationJSON.hasOwnProperty(route.routeJson.activityType)){
        transportationJSON[route.routeJson.activityType] += route.routeJson.distance
      }
      else {
        transportationJSON[route.routeJson.activityType] = route.routeJson.distance
      }
    }
    transportationJSON = renameKeys(transportationJSON)
    setTransportation(transportationJSON)
  }, [props.routes])

  return (
    <>
      <div className="bg-transparent">
        <Navbar
          key={false}
          expand={false}
          className="px-3 flex justify-content-end bg-transparent"
        >
          <Navbar.Toggle aria-controls={"offcanvasNavbarRight"} />
          <Navbar.Offcanvas
            id={"offcanvasNavbarRight"}
            aria-labelledby={"offcanvasNavbarLabelRight"}
            placement="end"
          >
            <Offcanvas.Body className="p-5">
              <Nav className="justify-content-end flex-grow-1 pe-3 ml-auto">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={"offcanvasNavbarLabelRight"}
                    className="font-weight-bold"
                  ></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Title className="font-weight-bold">
                  Most visited locations:
                </Offcanvas.Title>
                {props.locations && (
                  <ul className="mt-2">
                    {props.locations.map((loc, index) => (
                      <li key={index}>{loc.locationJson.name}</li>
                    ))}
                  </ul>
                )}
                <Offcanvas.Title className="font-weight-bold mt-3">
                  Means of transportation:
                </Offcanvas.Title>
                <ul className="mt-2">{listItemsTransportation}</ul>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </div>
    </>
  );
}

export default RightMenuComponent;
