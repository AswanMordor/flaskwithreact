import React from "react";
<<<<<<< HEAD
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Row } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
=======
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
>>>>>>> 98b9c7f420f52d7e7eef03dc072cd81e0f3a90a6

const styles = {backgroundColor: "#FCEDD3"};

<<<<<<< HEAD
function App() {
  return (
    <Router>
      <div>
        <Navbar light class="navbar" style={styles} expand="md">
          <NavbarBrand href="/">FitFinder</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
        </Switch>
      </div>
    </Router>
  );
}

=======
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

>>>>>>> 98b9c7f420f52d7e7eef03dc072cd81e0f3a90a6
export default App;
