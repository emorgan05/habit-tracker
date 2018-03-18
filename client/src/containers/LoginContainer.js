import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import LoginPage from './LoginPage';
import SignupPage from '../components/SignupPage';

class LoginContainer extends Component {
  render () {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="6">
              <LoginPage />
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

function mapStateToProps(state) {
  return {
    logged_in: state.session
  }
}

export default connect(mapStateToProps)(LoginContainer);
