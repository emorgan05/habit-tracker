// With the habit component -- render a list of 7 stars. Their value or their key is the date. Needs to be proper so it
// can say ok, today is Tuesday 3/13, so the list of 7 will start on Sunday 3/11.
// If it is a future date -- use a circle
// If it is a past date, check if it has been completed. If yes -- check mark
//                                                       If no -- X (times) mark
// If it is today, check if it has been completed. If yes -- check mark
//                                                 If no -- circle
// On click of the circle, push that completed === true to the habit.stars array
// When the date changes, push completed === false to the habit.stars array

// stars list
// star list item

// from today
// find monday
// check this.state.stars to see if there are 7 stars after monday
// if there are, map over them and create the starListItems
// if not, add stars
// then map over them

import React, { Component } from 'react';
import StarListItem from './StarListItem';

class StarsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: '',
      monday: '',
      mondayStar: '',
      week: [],
      stars: this.props.habit.stars,
    };
  }

  setToday() {
    const date = new Date();
    date.setHours(0,0,0);
    this.setState({
      today: date
    });
  }

  startOfWeek(date) {
    const clone = new Date(date);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    clone.setDate(diff);
    this.setState({
      monday: clone
    });
  }

  findMondayStar(monday) {
    const mondayStar = this.state.stars.filter((star) => { star.date === monday })
    const index = this.state.stars.indexOf(mondayStar);
    if(mondayStar) {
      this.setState({
        mondayStar: mondayStar,
        week: this.state.stars.slice(index, index + 6)
      });
    } else {
      addStars(monday);
    }
  }

  addStars(monday) {
    let id = 43;
    while (day < 7) {
      let newStar = {
        id: id,
        date: new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 1),
        completed: null,
      }

      starArray.push(newStar);

      id += 1;
      day += 1;
    }

    this.setState({
      week: starArray,
      stars: [
        ...this.state.stars,
        starArray,
      ]
    });
  }

  componentDidMount() {
    this.setToday();
    this.startOfWeek(this.state.today);
    this.findMondayStar(this.state.monday);
  }

  render() {
    if (!this.state.week) {
      return <h3>Loading...</h3>
    };

    const starListItems = this.state.week.map((star, index) => {
        return (
          <StarListItem
            key={index}
            star={star}
          />
        )
      }
    );

    return (
      <div className="stars-list">
        <ul>
          {starListItems}
        </ul>
      </div>
    );
  }
}

export default StarsList;
