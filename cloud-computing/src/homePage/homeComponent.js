import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeComponent() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Button className="m-2">Upload</Button>
      <Link to="/map">
        <Button className="m-2">View your Data</Button>
      </Link>
    </div>
  );
}

export default HomeComponent;
