import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FindMyFit from "./findmyfit";
import About from "./about";
import "./css/App.css";
import "./css/navbar.css";
import { Button } from 'react-bootstrap';
import banner from "./img/header.png";
import Login from "./login";
import Create from "./create";

// import banner from "./img/header2.png";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div>
            {/* <img src={require("/Users/nnsim/Documents/EE461L/FitFinder/site-2-react/fitfinder-react/src/header.png")} /> */}
            <img src={banner} alt={"banner"} />
          </div>
          <div class="topnav">
             <Link class="link" to="/about">
              About
            </Link>

            <Link class="link" to="/findmyfit">
              Find Your Fit
            </Link>

            <Link class="link" to="/create">
              Create an Account
            </Link>

             <Link class="link" to="/login">
              Login
            </Link>
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/findmyfit">
              <FindFit />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

// function Login() {
//   return <Login />;
// }

function about() {
  return <About />
}

function FindFit() {
  return <FindMyFit />;
}

export default App;
