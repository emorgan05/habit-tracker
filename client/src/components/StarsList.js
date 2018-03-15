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
      stars: [{}, {}, {}, {}, {}, {}, {}],
    };
  }

  componentDidMount() {
    this.setState({
      stars: [].concat(this.props.habit.stars, this.state.stars.splice(0, this.props.habit.stars.length - 1))
    });
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
