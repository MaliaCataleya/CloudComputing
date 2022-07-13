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
                            <Offcanvas.Title id={`offcanvasNavbarLabel`}>Konfiguration</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="container h-100">
                            <div className="position-relative h-100">
                                <Nav className="pe-3">
                                    <BootstrapDatePickerComponent></BootstrapDatePickerComponent>
                                </Nav>
                                <div className="py-3">
                                    <div class="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                        <label className="form-check-label" for="flexRadioDefault1">Auflistung besuchter Orte</label></div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                                        <label class="form-check-label" for="flexRadioDefault2">Summation bewegter Kilometer</label>
                                    </div>
                                </div>
                                <div className="position-absolute bottom-0 end-0">
                                    <button type="button" class="btn btn-primary">Speichern</button>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
            </div>
        </>
    );
}

export default DropDownComponent;
