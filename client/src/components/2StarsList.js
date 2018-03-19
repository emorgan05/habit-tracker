import React, { Component } from 'react';
import FaCircleO from 'react-icons/lib/fa/circle-o';

class StarsList extends Component {
  render() {
    let starsArray = [];
    for(let i = 0; i < 7; i++) {
      return (
        starsArray.push(<FaCircleO key={i} />)
      )
    }

    const stars = starsArray.map(star => <li>{star}</li>);

    return (
      {stars}
    )
  }
}

export default StarsList;
