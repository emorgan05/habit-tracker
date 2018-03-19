import React from 'react';

const AddHabitForm = (props) => {
  console.log(props);
  return (
    {/* <div className="add-habit">
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
    */}
  )
}

export default AddHabitForm;
