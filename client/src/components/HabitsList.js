import React from 'react';
import App from '../App';

class HabitsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    debugger
    return (
      <p>{this.props.habits}</p>
    )
  }
}

export default HabitsList;
