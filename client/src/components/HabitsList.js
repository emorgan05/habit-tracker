import React from 'react';
import HabitListItem from './HabitListItem';

const HabitsList = ({habits, onHabitSelect}) => {
  if(!habits) {
    return (<h3>Loading...</h3>);
  }

  const habitListItems = habits.map((habit, index) => {
      return (
        <HabitListItem
          onHabitSelect={onHabitSelect}
          key={index}
          habit={habit}
        />
      )
    }
  );

  return (
    <div className="habits-list">
      <ul>
        {habitListItems}
      </ul>
    </div>
  )
}

export default HabitsList;
