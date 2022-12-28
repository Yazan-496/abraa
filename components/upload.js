import axios from "axios"

import React, { Component } from "react"

class Upload extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] })
  }

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData()

    // Update the formData object
    formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name)

    // Details of the uploaded file
    console.log(this.state.selectedFile)

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData)
  }

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>Last Modified: {this.state.selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      )
    } else {
      return (
        <div>
          <br />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="upload-tools">
        <div
          className="select"
          style={{
            display: "flex",
            alignItems: "baseline"
          }}
        >
          <input
            style={{
              border: "none",
              backgroundColor: "transparent"
            }}
            type="file"
            onChange={this.onFileChange}
            className="btn btn-default btn-sm custom-button"
          />
          <button disabled={this.state.selectedFile === null} onClick={this.onFileUpload}>
            Upload!
          </button>
        </div>
      </div>
    )
  }
}

export default Upload
