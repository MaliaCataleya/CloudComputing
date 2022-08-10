import React from "react";
import {
    Navbar,
    Form,
    Nav,
    Offcanvas,
} from "react-bootstrap";
import BootstrapDatePickerComponent from "./BootstrapDatePickerComponent";

//highlight days that have data?????

function LeftMenuComponent(props) {

    return (
        <>
            <div className="position-absolute top-0 start-0 w-25 bg-transparent">
                <Navbar key={false} expand={false} className="px-3 bg-transparent">
                    <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar`}
                        aria-labelledby={`offcanvasNavbarLabel`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                                Konfiguration
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="container h-100">
                            <div className="position-relative h-100">
                                <Nav className="pe-3">
                                    <BootstrapDatePickerComponent
                                        setDate={props.setDate}
                                    ></BootstrapDatePickerComponent>
                                </Nav>
                                <div className="py-3">
                                    <Form.Check
                                        checked={props.placeChecked}
                                        type="checkbox"
                                        id="checkboxPlace"
                                        label="Loactions"
                                        onChange={() => props.setPlaceChecked(!props.placeChecked)}
                                    />
                                    <Form.Check
                                        checked={props.rangeChecked}
                                        type="checkbox"
                                        id="checkboxRange"
                                        label="Routes"
                                        onChange={() => props.setRangeChecked(!props.rangeChecked)}
                                    />
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
            </div>
        </>
    );
}

export default LeftMenuComponent;
