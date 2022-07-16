import React, { useState, useRef } from "react";
import AppAPI from "../api/AppApi";
import * as ConstClass from '../helpers/constants';

function UploadButton(props) {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const getDates = (dateJson) => {
    let end = dateJson["endTimestamp"]
    let start = dateJson["startTimestamp"]
    let getDaysArray = (start, end) => {
      for(var arr=[], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate()+1)){
          arr.push(new Date(dt).toISOString().split('T')[0]);
      }
      return arr;
    };
    let dates = getDaysArray(start, end)
    return dates
  }

  const handleFile = async () => {
    if (inputRef.current?.files) {
      let file = await inputRef.current?.files[0].text()
      let fileJSON = JSON.parse(file)
      let locations = []
      let activities = []
      for(let element of fileJSON.timelineObjects){
        if(Object.keys(element)[0] === ConstClass.placeVisit){
          let location = element[ConstClass.placeVisit]["location"]
          location["dates"] = getDates(element[ConstClass.placeVisit]["duration"])
          locations.push(location)
          console.log(locations)
        }
        else if (Object.keys(element)[0] === ConstClass.activitySegment){
          activities.push(element[ConstClass.activitySegment]["activities"])
        }
        
      }
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
