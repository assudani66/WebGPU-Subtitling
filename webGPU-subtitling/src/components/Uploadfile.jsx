import "./Uploadfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function UploadFfile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemove = () => {
    setFile(null);
  };

  return (
    <div className="dropbox-container">
      <h1>Upload File</h1>
      <div
        className="dropbox"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <p>Drag & drop a file here or click to choose one</p>
      </div>
      {file && (
        <div className="file-info">
          <p>
            <strong>File Name:</strong> {file.name}
          </p>
          <p>
            <strong>File Size:</strong> {(file.size / 1024).toFixed(2)} KB
          </p>
          <p>
            <strong>File Type:</strong> {file.type || "Unknown"}
          </p>
          <button onClick={handleRemove} className="remove-button">
            Remove File
          </button>
          <button>Submit</button>
        </div>
      )}
      <div></div>
    </div>
  );
}

export default UploadFfile;
