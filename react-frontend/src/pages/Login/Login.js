import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";
import fire from "../../credentials/Fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });

    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();

    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password);
  };

  render() {
    return (
      <div id="login">
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Login</h1>
            <Form className="container" onSubmit={this.handleSubmit}>
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
                  id="login-button"
                  onChange={this.handleSubmit}
                >
                  Login
                </Button>
                <Link to="/join">
                  <small>Create an account!</small>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
