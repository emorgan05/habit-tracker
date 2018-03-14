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

  checkStars(monday) {
    this.state.stars.filter((star) => { star.date === monday });
  }

  addDates() {
    let date = this.state.stars[this.state.stars.length - 1].date;
    let day = date.getDay();
    let id = 24;
    let starArray = [];

    if (day < 6) {
      let firstStar = {
        id: id,
        date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
        completed: null,
      }

      starArray.push(firstStar);
      id += 1;
      day += 1;
    }

    while (day < 7) {
      let newStar = {
        id: id,
        date: new Date(starArray[starArray.length - 1].date.getFullYear(), starArray[starArray.length - 1].date.getMonth(), starArray[starArray.length - 1].date.getDate() + 1),
        completed: null,
      }

      starArray.push(newStar);

      id += 1;
      day += 1;
    }

    this.setState({
      stars: [
        ...this.state.stars,
        starArray,
      ]
    });
  }

  componentDidMount() {
    this.setToday();
    this.startOfWeek(this.state.today);
    this.checkStars(this.state.monday);
    this.addDates();
  }

  render() {
    if (!this.state.stars) {
      return <h3>Loading...</h3>
    };

    const starListItems = this.state.stars.map((star, index) => {
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
