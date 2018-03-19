import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { createNewHabit } from '../actions/habitActions';
import AddHabitForm from './AddHabitForm';

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
    });
    this.props.history.push('/habits');
  }

  render() {
    return (
      <AddHabitForm {...this.state} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createHabit: bindActionCreators(createNewHabit, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddHabit);
