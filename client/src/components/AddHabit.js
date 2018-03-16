import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createNewHabit } from '../actions/habitActions';

class AddHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      numberOfDays: '',
      category: '',
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
      numberOfDays: '',
      category: '',
      stars: [{}, {}, {}, {}, {}, {}, {}]
    })
  }

  render() {
    return (
      <div className="add-habit">
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
            <Input type="text" name="numberOfDays" onChange={this.handleChange} value={this.state.numberOfDays} />
          </FormGroup>
          <FormGroup>
            <Label>Category: </Label>
             <Input type="select" name="category" id="exampleSelect" value={this.state.category} onChange={this.handleChange}>
              <option value="Emotional">Emotional</option>
              <option value="Intellectual">Intellectual</option>
              <option value="Fitness">Fitness</option>
              <option value="Social">Social</option>
              <option value="Environmental">Environmental</option>
              <option value="Financial">Financial</option>
              <option value="Spiritual">Spiritual</option>
              <option value="Health">Health</option>
              <option value="Relationships/Family">Relationships/Family</option>
            </Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
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
