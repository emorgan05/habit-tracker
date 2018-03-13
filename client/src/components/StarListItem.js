import React from 'react';

const StarListItem = ({star}) => {
  return (
    <li>
      {star.completed}
    </li>
  )
}

export default StarListItem;
