import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./css/index.css";
import App from "./App";
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import * as firebase from "firebase";
import firebaseConfig from "./credentials/firebase.config";

firebase.initializeApp(firebaseConfig);
export const AuthContext = React.createContext(null);

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/CreateUser">Create User</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/CreateUser" component={CreateUser} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
