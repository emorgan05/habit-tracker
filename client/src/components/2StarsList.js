import React, { Component } from 'react';
import FaCircleO from 'react-icons/lib/fa/circle-o';

class StarsList extends Component {
  const stars = for(let i = 0; i < 7; i++) {
    return (
      <FaCircleO />
    )
  }

  render() {
    return (
      {stars}
    )
  }
}

export default StarsList;
