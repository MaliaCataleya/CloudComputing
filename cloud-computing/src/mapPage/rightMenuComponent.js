import React, { useState, useEffect } from "react";
import { Navbar, Offcanvas, Nav } from "react-bootstrap";

function RightMenuComponent() {
  const [locations, setLocations] = useState([
    "Megges",
    "Burger King",
    "Madeira",
  ]);
  const [transportations, setTransportations] = useState({
    "Walking": 4556,
    "Tram": 4242424,
  }
  );
  const listItemsLocations = locations.map((location, index) => (
    <li key={index}>{location}</li>
  ));
  const listItemsTransportation =  Object.entries(transportations).map(([key, value]) => (
    <li key={key}>{key}: {value}m</li>
  ))

  useEffect(() => {
    console.log(Object.entries(transportations).forEach((m)=>console.log(m)));
  });

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
                  <ul className="mt-2">{listItemsLocations}</ul>
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
