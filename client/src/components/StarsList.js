import React, { Component } from 'react';
import StarListItem from './StarListItem';

class StarsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
