import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStar } from '../actions/starsActions';

import HabitLiPres from '../components/HabitLiPres';

class HabitListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      completed: false,
      habit_id: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // calculate current day of year (1 - 365/366)
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);

    this.setState({
      day: day,
      completed: true,
      habit_id: this.props.habit.id
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    event.target.style.backgroundColor = '#A7CD67';
    this.props.createStar(this.state);
  }

  render() {
    return (
      <HabitLiPres habit_id={this.props.habit.id} name={this.props.habit.name} handleClick={this.handleClick} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createStar: bindActionCreators(createStar, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(HabitListItem);
