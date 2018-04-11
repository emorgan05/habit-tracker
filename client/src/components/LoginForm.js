import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = (props) => {
  return (
    <div className="login">
      <h5>{props.title}</h5>
      <Form onSubmit={props.handleSubmit} >
        <FormGroup>
          <Label>Email: </Label>
          <Input type="text" name="email" onChange={props.handleChange} value={props.login.credentials.email} />
        </FormGroup>
        <FormGroup>
          <Label>Password: </Label>
          <Input type="password" name="password" onChange={props.handleChange} value={props.login.credentials.password} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default LoginForm;
