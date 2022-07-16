import React, { useState, useRef } from "react";
import AppAPI from "../api/AppApi";

function UploadButton(props) {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleFile = async () => {
    if (inputRef.current?.files) {
      let file = await inputRef.current?.files[0].text()
      let fileJSON = JSON.parse(file)
      let api = new AppAPI();
      api
        .postFileByUser(
          fileJSON,
          sessionStorage.getItem("sessionId")
        )
        .then((res) => {
          props.setUploaded(true);
          inputRef.current?.files && setUploadedFileName(inputRef.current.files[0].name);
        })
        .catch();
    }
  };
  return (
    <div className="m-3">
      <input
        ref={inputRef}
        onChange={handleFile}
        className="d-none"
        type="file"
        accept=".json"
      />
      <button
        onClick={handleUpload}
        className={`btn btn-outline-${
          uploadedFileName ? "success" : "primary"
        }`}
      >
        {uploadedFileName ? uploadedFileName : "Upload"}
      </button>
    </div>
  );
}

export default UploadButton;
