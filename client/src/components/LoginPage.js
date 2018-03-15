import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sessionActions from '../actions/sessionActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    };
  }

  handleChange = (event) => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({ credentials: credentials });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.loginUser(this.state.credentials);
  }

  render () {
    return (
      <div className="login">
        <h5>Log In</h5>
        <Form onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label>Email: </Label>
            <Input type="text" name="email" onChange={this.handleChange} value={this.state.credentials.email} />
          </FormGroup>
          <FormGroup>
            <Label>Password: </Label>
            <Input type="password" name="password" onChange={this.handleChange} value={this.state.credentials.password} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    actions: sessionActions },
    dispatch);
  });
}

export default connect(null, mapDispatchToProps)(LoginPage);
