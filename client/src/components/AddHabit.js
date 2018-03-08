import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddHabit = () => {
  return (
    <div className="add-habit">
      <h5>Add a Habit</h5>
      <Form>
        <FormGroup>
          <Label>Name: </Label>
          <Input type="text" name="name" />
        </FormGroup>
        <FormGroup>
          <Label>Description: </Label>
          <Input type="text" name="description" />
        </FormGroup>
        <FormGroup>
          <Label>Number of days per week (1 - 7): </Label>
          <Input type="text" name="number_of_days" />
        </FormGroup>
        <FormGroup>
          <Label>Category: </Label>
           <Input type="select" name="select" id="exampleSelect">
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
  )
}

export default AddHabit;
