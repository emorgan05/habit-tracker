import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginPage extends Component {
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
      <Container>
        <Row>
          <Col xs="6">
            <div className="login">
              <h5>Log In</h5>
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
          </Col>
        </Row>
      </Container>
    )
  }
}

export default LoginPage
