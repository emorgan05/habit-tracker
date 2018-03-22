import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStar } from '../actions/starsActions';

import HabitLiPres from '../components/HabitLiPres';

class HabitListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: {
        day: '',
        completed: false,
        habit_id: ''
      },
      counter: 0
    };
    this.likeHandleClick = this.likeHandleClick.bind(this);

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
    event.target.style.backgroundColor = 'rgb(40, 198, 150)';
    this.props.createStar(this.state.star);
  }

  likeHandleClick(event){
    //make a fetch request to API to get habits
    //log them to the console

    console.log('a')
    fetch('http://localhost:3001/habitsdsdsafdsfds', {
      method: 'GET',
      headers: {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    }).then(response => {
      if (response.ok) {
        console.log('b')
        return response.json()
      }

      throw new Error(response.statusText)
    })
      .then(response => console.log('c', response))
      .catch(err => console.log('d', err))
      console.log('e')

      // a e b c + response

      // a e d + err
  }

  render() {
    return (
      <HabitLiPres habit_id={this.props.habit.id} name={this.props.habit.name} handleClick={this.handleClick} likeHandleClick={this.likeHandleClick} counter={this.state.counter} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createStar: bindActionCreators(createStar, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(HabitListItem);
