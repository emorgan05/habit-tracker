import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { createNewHabit } from '../actions/habitActions';

class AddHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      number_of_days: '',
      category_id: '',
      stars: [{}, {}, {}, {}, {}, {}, {}]
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createHabit(this.state);
    this.setState({
      name: '',
      description: '',
      number_of_days: '',
      category_id: '',
      stars: [{}, {}, {}, {}, {}, {}, {}]
    })
  }

  render() {
    return (
      <div className="add-habit">
        <Container>
          <Row>
            <Col xs="6">
              <h5>Add a Habit</h5>
              <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                  <Label>Name: </Label>
                  <Input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                </FormGroup>
                <FormGroup>
                  <Label>Description: </Label>
                  <Input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
                </FormGroup>
                <FormGroup>
                  <Label>Number of days per week (1 - 7): </Label>
                  <Input type="text" name="number_of_days" onChange={this.handleChange} value={this.state.number_of_days} />
                </FormGroup>
                <FormGroup>
                  <Label>Category: </Label>
                   <Input type="select" name="category_id" id="exampleSelect" value={this.state.category} onChange={this.handleChange}>
                    <option value='1'>Emotional</option>
                    <option value='2'>Intellectual</option>
                    <option value='3'>Fitness</option>
                    <option value='4'>Social</option>
                    <option value='5'>Environmental</option>
                    <option value='6'>Financial</option>
                    <option value='7'>Spiritual</option>
                    <option value='8'>Health</option>
                    <option value='9'>Relationships/Family</option>
                  </Input>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createHabit: bindActionCreators(createNewHabit, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddHabit);
