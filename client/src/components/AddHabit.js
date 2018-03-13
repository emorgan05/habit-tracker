import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      numberOfDays: '',
      category: '',
      stars: [
        { id: 156,
          date: new Date(),
          completed: null,
        }
      ]
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    })
  }

  handleDaysChange = (event) => {
    this.setState({
      numberOfDays: event.target.value,
    })
  }

  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState({
      name: '',
      description: '',
      numberOfDays: '',
      category: '',
      stars: [
        { id: 156 + 1,
          date: new Date(),
          completed: null,
        }
      ]
    })
  }

  render() {
    return (
      <div className="add-habit">
        <h5>Add a Habit</h5>
        <Form onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label>Name: </Label>
            <Input type="text" name="name" onChange={this.handleNameChange} value={this.state.name} />
          </FormGroup>
          <FormGroup>
            <Label>Description: </Label>
            <Input type="text" name="description" onChange={this.handleDescriptionChange} value={this.state.description} />
          </FormGroup>
          <FormGroup>
            <Label>Number of days per week (1 - 7): </Label>
            <Input type="text" name="numberOfDays" onChange={this.handleDaysChange} value={this.state.numberOfDays} />
          </FormGroup>
          <FormGroup>
            <Label>Category: </Label>
             <Input type="select" name="select" id="exampleSelect" value={this.state.category} onChange={this.handleCategoryChange}>
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

export default AddHabit;
