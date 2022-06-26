import React, { useState } from "react";
import { Navbar, Offcanvas, Nav } from "react-bootstrap"

function RightMenuComponent() {
  const [locations, setLocations] = useState(["Megges", "Burger King", "Madeira"]);
  const listItems = locations.map((location) => 
    <li key={locations}>
      {location}
    </li>
  );

  return (

    <>   
    <div>
    <Navbar key={false} expand={false} className="mb-3 px-3 flex justify-content-end">
      <Navbar.Toggle aria-controls={`offcanvasNavbarRight`}/>
      <Navbar.Offcanvas
        id={`offcanvasNavbarRight`}
        aria-labelledby={`offcanvasNavbarLabelRight`}
        placement="end"
      >
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3 ml-auto">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabelRight`} className="font-weight-bold">
              Where were you?
            </Offcanvas.Title>
          </Offcanvas.Header>
          <ul>
            {listItems}
          </ul>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
    </div>
    </>
  );
}

export default RightMenuComponent;