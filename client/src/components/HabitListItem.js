import React, { Component } from 'react';
import FaCircleO from 'react-icons/lib/fa/circle-o';
import FaCheckCircleO from 'react-icons/lib/fa/check-circle-o';
// import StarsList from './StarsList';

class HabitListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    }
  }

  render() {
    return (
      <li>
        <p onClick={() => this.props.onHabitSelect(this.props.habit)}>
          {this.props.habit.name}
        </p>
        <p onClick={() => this.state.completed === true ? null : this.setState({ completed: true })}>
          {this.state.completed ? <FaCheckCircleO /> : <FaCircleO />}
        </p>
      </li>
    )
  }
}

export default HabitListItem
