import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router';

import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import * as sessionActions from '../actions/sessionActions';

class LoginContainer extends Component {
  render () {
    if(this.props.logged_in) {
      return (<Redirect to="/habits" />);
    } else {
      return (
        <div className="App">
          <Container>
            <Row>
              <Col xs="6">
                <LoginPage loginUser={this.props.actions.loginUser} />
              </Col>
              <Col xs="6">
                <SignupPage createNewUser={this.props.actions.createNewUser} logged_in={this.props.logged_in} />
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    logged_in: state.session
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
