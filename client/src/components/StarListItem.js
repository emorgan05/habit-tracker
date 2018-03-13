import React from 'react';

const StarListItem = ({star}) => {
  console.log(star);

  return (
    <li>
      {star.date.toString()}
    </li>
  )
}

export default StarListItem;
