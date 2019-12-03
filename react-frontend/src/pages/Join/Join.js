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
      <Form className="container" onSubmit={this.handleSubmit}>
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
        <Input id="join-page" hidden/>
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
        <Button type="submit" id="join-button" onChange={this.handleSubmit}>Join</Button>
      </Form>
    );
  }
}

export default Join;
