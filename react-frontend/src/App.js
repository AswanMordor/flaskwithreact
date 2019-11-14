import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Row } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

const styles = {backgroundColor: "#FCEDD3"};

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

export default App;
