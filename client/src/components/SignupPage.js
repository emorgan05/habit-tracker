import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        email: '',
        password: ''
      }
    };
  }
  
  render () {
    return (
      <div className="login">
        <h5>Sign Up</h5>
        <Form>
          <FormGroup>
            <Label>Email: </Label>
            <Input type="text" name="email" />
          </FormGroup>
          <FormGroup>
            <Label>Password: </Label>
            <Input type="password" name="password" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default SignupPage
