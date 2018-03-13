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
      monday: null,
      stars: this.props.habit.stars,
    };
  }

  componentDidMount() {
    const startOfWeek = () => {
      const date = this.state.stars[this.state.stars.length - 1].date;
      const clone = new Date(date);
      const day = date.getDay();
      const diff = date.getDate() - day + (day === 0 ? -6 : 1);
      this.setState({
        monday: clone.setDate(diff)
      });
    }

    const addNewStars = () => {
      let id = 5;
      while(this.state.stars[this.state.stars.length - 1].date.getDate() <= 31) {
        let starDate = this.state.stars[this.state.stars.length - 1].date;
        let starDateToAdd = new Date(starDate.getFullYear(), starDate.getMonth(), starDate.getDate() + 1);
        let star = {
          id: id,
          date: starDateToAdd,
          completed: '',
        };

        this.setState({
          stars: [
            ...this.state.stars,
            star
          ]
        })
        id += 1;
      }
    }

    startOfWeek();
    addNewStars();
  }

  render() {
    const starListItems = this.props.habit.stars.map((star, index) => {
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
