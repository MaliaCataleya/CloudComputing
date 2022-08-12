import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import UploadButton from "./uploadButtonComponent";

function HomeComponent() {
  const [uploaded, setUploaded] = useState(false);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div>Download your google location data and upload the data of one month using the upload button. <a rel="noreferrer" target="_blank" href="https://support.google.com/accounts/answer/3024190?hl=en">Here</a> you can find a manual on how to download the data from your google account.</div>
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
