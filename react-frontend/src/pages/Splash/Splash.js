import React, { Component } from "react";
import { Link } from "react-router-dom";

class Splash extends Component {
  render() {
    return (
      <div id="splash">
        <div className="text-container">
          <h1>Fit Finder</h1>
          <p>Find your fits here!</p>
          <Link to="/home">
            <button>Find your fit!</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Splash;
