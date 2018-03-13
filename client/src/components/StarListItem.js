import React from 'react';
import FaCircleO from 'react-icons/lib/fa/circle-o';
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o';
import FaCheckCircleO from 'react-icons/lib/fa/check-circle-o';

const StarListItem = ({star}) => {
  let starDate = star.date.getDate();
  let now = new Date();
  now.setHours(0, 0, 0, 0);
  
  if (starDate < now) {
    if (star.completed) {
      return (<li><FaCheckCircleO /></li>)
    } else {
      return (<li><FaTimesCircleO /></li>)
    }
  } else {
    return (<li><FaCircleO /></li>)
  }
}

export default StarListItem;
