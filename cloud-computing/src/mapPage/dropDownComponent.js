import React from "react";
import { Navbar, NavDropdown, Form, Button, Nav, FormControl, Offcanvas } from "react-bootstrap"
import BootstrapDatePickerComponent from "./BootstrapDatePickerComponent";

function DropDownComponent() {
    return (
        <>
            <div className="position-absolute top-0 start-0 w-25 bg-transparent">
                <Navbar key={false} expand={false} className="px-3 bg-transparent">
                    <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
                    <Navbar.Offcanvas id={`offcanvasNavbar`} aria-labelledby={`offcanvasNavbarLabel`} placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel`}>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <BootstrapDatePickerComponent></BootstrapDatePickerComponent>
                            </Nav>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                <label class="form-check-label" for="flexRadioDefault1">Default radio</label></div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                <label class="form-check-label" for="flexRadioDefault1">Second default radio</label>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
            </div>
        </>
    );
}

export default DropDownComponent;
