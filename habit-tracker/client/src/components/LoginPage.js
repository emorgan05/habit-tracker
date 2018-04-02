import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from './LoginForm';

class LoginPage extends Component {
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
    this.props.loginUser(this.state.credentials);
    this.props.history.push('/habits');
  }

  render () {
    return (
      <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} login={this.state}/>
    )
  }
}

export default withRouter(LoginPage);
