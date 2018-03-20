import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FaCircleO from 'react-icons/lib/fa/circle-o';
// import StarsList from './StarsList';
import { createStar } from '../actions/habitActions';

class HabitListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      completed: false,
      habit_id: ''
    };
  }

  handleClick = (event) => {
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

    this.props.createStar(this.state);
  }

  render() {
    return (
      <Link key={this.props.habit.id} to={`/habits/${this.props.habit.id}`}>
        <li>
          {this.props.habit.name}
          <FaCircleO onClick={this.handleClick}/>
          {/* <StarsList habit={habit} /> */}
        </li>
      </Link>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createStar: bindActionCreators(createStar, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(HabitListItem);
