// import React, { useState } from "react";
// import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Row } from "reactstrap";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   withRouter
// } from "react-router-dom";
// import Splash from "./pages/Splash";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Join from "./pages/Join";
// import * as firebase from "firebase";

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/main.scss";

// function App() {
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       isAuthenticated = true;
//       console.log(isAuthenticated);
//     } else {
//       isAuthenticated = false;
//     }
//   });

//   // const [isAuthenticated, userHasAuthenticated] = useState(false);
//   // const [isAuthenticated, userHasAuthenticated] = useState(true);

//   let isAuthenticated = false;

//   return (
//     <Router>
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">FitFinder</NavbarBrand>
//           <Nav className="ml-auto" navbar>
//             <NavItem>
//               <NavLink href="/home">Home</NavLink>
//             </NavItem>
//             {isAuthenticated ? (
//               <NavItem>
//                 <NavLink href="/">Logout</NavLink>
//               </NavItem>
//             ) : (
//               <NavItem>
//                 <NavLink href="/login">Login</NavLink>
//               </NavItem>
//             )}
//           </Nav>
//         </Navbar>

//         <Switch>
//           <Route exact path="/" component={Splash} />
//           <Route path="/home" component={Home} />
//           <Route path="/login" component={Login} />
//           <Route path="/join" component={Join} />
//           {/* <Route
//             path="/login"
//             render={props => (
//               <Login
//                 {...props}
//                 isAuthenticated={isAuthenticated}
//                 userHasAuthenticated={userHasAuthenticated}
//               />
//             )}
//           /> */}
//           {/* <Route exact path="/join" component={Join} /> */}
//           {/* <Route
//             path="/join"
//             render={props => (
//               <Join
//                 {...props}
//                 isAuthenticated={isAuthenticated}
//                 userHasAuthenticated={userHasAuthenticated}
//               />
//             )}
//           /> */}
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // export default withRouter(App);
// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
