import axios from "axios"
import React, { Component } from "react"
import { ChangeEvent, useRef, useState } from "react"
import { Uploader } from "uploader" // Installed by "react-uploader".
import { UploadButton } from "react-uploader"
const UploadFile = () => {
  const uploader = Uploader({
    apiKey: "free" // Get production API keys from Upload.io
  })

  // Configuration options: https://upload.io/uploader#customize
  const options = { multi: false }
  return (
    <div className="upload_box_main">
      <div className="upload_box_main_data">
        <div className="text">
          <b>Upload Logo</b>
          <span id="uploadeds">Minmum 300x300px (jpeg,png).</span>
        </div>
        <input type="file" className="hidden" name="logoshipperimg" id="logoshipperimg" />
        <UploadButton
          uploader={uploader}
          options={options}
          //   onComplete={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
        >
          {({ onClick }) => (
            <div onClick={onClick} className="button" id="logouploadicon">
              <label>UPLOAD FILE</label>
            </div>
          )}
        </UploadButton>
      </div>
    </div>
  )
}

export default UploadFile
