import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const AddHabitForm = (props) => {

  return (
    <div className="add-habit">
      <h5>Add a Habit</h5>
      <Form onSubmit={props.handleSubmit} >
        <FormGroup>
          <Label>Name: </Label>
          <Input type="text" name="name" onChange={props.handleChange} value={props.habit.name} />
        </FormGroup>
        <FormGroup>
          <Label>Description: </Label>
          <Input type="text" name="description" onChange={props.handleChange} value={props.habit.description} />
        </FormGroup>
        <FormGroup>
          <Label>Number of days per week (1 - 7): </Label>
          <Input type="text" name="number_of_days" onChange={props.handleChange} value={props.habit.number_of_days} />
        </FormGroup>
        <FormGroup>
          <Label>Category: </Label>
           <Input type="select" name="category_id" id="exampleSelect" value={props.habit.category} onChange={props.handleChange}>
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
    </div>
  )
}

export default AddHabitForm;
