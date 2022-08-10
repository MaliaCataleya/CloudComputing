import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import UploadButton from "./uploadButtonComponent";

function HomeComponent() {
  const [uploaded, setUploaded] = useState(false);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <UploadButton data-testid="uploadButton" setUploaded={setUploaded}></UploadButton>
      {uploaded ? (
        <Link to="/map">
          <Button className="m-2">View your Data</Button>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default HomeComponent;
