import React from 'react';
import HabitListItem from './HabitListItem';

const HabitsList = ({habits}) => {
  if(!habits) {
    return (<h3>Loading...</h3>);
  }

  const habitListItems = habits.map((habit, index) => <HabitListItem key={index} habit={habit} />);

  return (
    <div className="habits-list">
      <ul>
        {habitListItems}
      </ul>
    </div>
  )
}

export default HabitsList;
