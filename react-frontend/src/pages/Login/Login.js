import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";

class Login extends Component {

  state = {
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
    console.log(this.state);
  };

  render() {
    return (
      <Form className="container">
        <br />
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password123"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button class="btn" onChange={this.handleSubmit} >Login</Button>
        <Link to="/join">
          <Button class="btn">Join</Button>
        </Link>
      </Form>
    );
  }
}

export default Login;
