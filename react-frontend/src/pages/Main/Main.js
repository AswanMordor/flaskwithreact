import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Row } from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Splash from "../Splash";
import Home from "../Home";
import Login from "../Login";
import Join from "../Join";
import fire from "../../credentials/Fire";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/main.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        this.props.history.push("/home");
      } else {
        this.setState({ user: null });
      }
    });
  }

  logout() {
    fire.auth().signOut();
    this.props.history.push("/login");
  }

  render() {
    console.log(this.state.user);
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">FitFinder</NavbarBrand>
          <Nav className="ml-auto" navbar>
            {this.state.user ? (
              <React.Fragment>
                <NavItem>
                  <NavLink href="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" onClick={this.logout}>
                    Logout
                  </NavLink>
                </NavItem>
              </React.Fragment>
            ) : (
              <NavItem>
                <NavLink href="">About</NavLink>
              </NavItem>
            )}
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);