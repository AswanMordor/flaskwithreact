import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row } from "reactstrap";
// import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import fire from "../../credentials/Fire";

class Join extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password);
  };

  render() {
    return (
      <div id="login">
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <Form className="container" onSubmit={this.handleSubmit}>
              <div className="firstName">
                <Label for="firstName">First Name</Label>
                <Input
                  type="firstName"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="lastName">
                <Label for="lastName">Last Name</Label>
                <Input
                  type="lastName"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="email">
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@example.com"
                  onChange={this.handleChange}
                />
              </div>
              <div className="password">
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password123"
                  onChange={this.handleChange}
                />
              </div>
              <div className="createAccount">
                <Button
                  type="submit"
                  id="join-button"
                  onChange={this.handleSubmit}
                >
                  Join
                </Button>
                <Link to="/login">
                  <small>Already Have an Account?</small>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Join;
