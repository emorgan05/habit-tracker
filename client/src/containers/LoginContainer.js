import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';

import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import * as sessionActions from '../actions/sessionActions';

class LoginContainer extends Component {
  render () {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="6">
              <LoginPage loginUser={this.props.actions.loginUser} />
            </Col>
            <Col xs="6">
              <SignupPage />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);
