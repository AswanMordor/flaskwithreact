import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row } from "reactstrap";
// import * as firebase from "firebase";

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

  // handleSubmit = e => {
  //   e.preventDefault();
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(this.state.email, this.state.password);
  // };

  render() {
    return (
      <Form className="container" onSubmit={this.handleSubmit}>
        {/* <FormGroup>
          <Label for="firstName">Hello</Label>
          <Input
            type="firstName"
            name="firstName"
            id="firstName"
            placeholder="example@example.com"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">World</Label>
          <Input
            type="lastName"
            name="lastName"
            id="lastName"
            placeholder="example@example.com"
            onChange={this.handleChange}
          />
        </FormGroup> */}
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
        <Button type="submit">Join</Button>
      </Form>
    );
  }
}

export default Join;
