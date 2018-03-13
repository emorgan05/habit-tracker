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

import React, { Component } from 'react';
import StarListItem from './StarListItem';

class StarsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monday: '',
      stars: this.props.habit.stars,
    };
  }

  startOfWeek = () => {
    const date = this.state.stars[this.state.stars.length - 1].date;
    const clone = new Date(date);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    clone.setDate(diff);
    this.setState({
      monday: clone,
      stars: [
        ...this.state.stars,
        { id: 5,
          date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
          completed: null,
        }
      ]
    });
  }

  componentDidMount() {
    this.startOfWeek();
  }

  render() {
    console.log(this.state.stars);
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
