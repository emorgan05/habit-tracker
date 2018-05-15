import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from './LoginForm';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({ credentials: credentials });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewUser(this.state.credentials);
  }

  render () {
    return (
      <LoginForm title={"Sign Up"} handleChange={this.handleChange} handleSubmit={this.handleSubmit} login={this.state}/>
    )
  }
}

export default withRouter(SignupPage);
