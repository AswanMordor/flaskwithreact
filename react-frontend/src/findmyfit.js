import React from "react";
import SideNav from "./sidenav";
import "./css/findmyfit.css";
// import 'bootstrap/js/dist/button';
import Results from "./item";

const backendUrl = "http://127.0.0.1:5000/"


class FindMyFit extends React.Component {
  state = {requestText: ""}
  fileRef = React.createRef();

  uploadClick() {
    document.getElementById("uploadImg").click()
  }

  tempGet() {
    fetch(backendUrl+"temp", {
      method: 'GET'
    }).then(response => response.json().then(jresponse => {
      console.log(jresponse)
      this.setState({requestText: jresponse.res})
    })).catch(() => {
      console.log("ERROR")
    })
}

  tempPost() {
    fetch(backendUrl+"temp", {
      method: 'POST'
    }).then(response => response.json().then(jresponse => {
      console.log(jresponse)
      this.setState({requestText: jresponse.res})
    })).catch(() => {
      console.log("ERROR")
    })
  }


  state = {
    selectedFile: null
  }

  fileUploadHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  };

  const

  render() {
    return (
      <div class="content">
        <SideNav />
        <div class="upload">
          <input id="uploadImg" type="file" onChange={this.fileUploadHandler} hidden/>
          <button type="button" class="btn btn-outline-dark" onClick={this.uploadClick.bind(this)}>Upload</button>
          <button type="button" class="btn btn-outline-dark" onClick={this.tempGet.bind(this)}>SEND GET REQUEST</button>
          <button type="button" class="btn btn-outline-dark" onClick={this.tempPost.bind(this)}>SEND POST REQUEST</button>
          <button type="button" class="btn btn-outline-dark">{this.state.requestText}</button>
          {/* <img src={require(this.state.selectedFile)} /> */}
        </div>

        <Results />
      </div>
    );
  }
}

export default FindMyFit;
