import React from "react";
import SideNav from "./sidenav";
import "./css/findmyfit.css";
// import 'bootstrap/js/dist/button';
import Results from "./item";

class FindMyFit extends React.Component {

  fileRef = React.createRef();

  uploadClick() {
    document.getElementById("uploadImg").click()
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
          <button type="button" class="btn btn-outline-dark" onClick={this.uploadClick}>Upload</button>
          {/* <img src={require(this.state.selectedFile)} /> */}
        </div>

        <Results />
      </div>
    );
  }
}

export default FindMyFit;
