import React from 'react';

const AddHabit = () => {
  return (
    <div className="addHabit">
      <h3>Add a Habit</h3>
      <form>
        <label>Name: </label>
        <input type="text" name="name" />

        <label>Description: </label>
        <input type="text" name="description" />

        <label>Number of days per week (1 - 7): </label>
        <input type="text" name="number_of_days" />

        <label>Category: </label>
        <select>
          <option value="Emotional">Emotional</option>
          <option value="Intellectual">Intellectual</option>
          <option value="Fitness">Fitness</option>
          <option value="Social">Social</option>
          <option value="Environmental">Environmental</option>
          <option value="Financial">Financial</option>
          <option value="Spiritual">Spiritual</option>
          <option value="Health">Health</option>
          <option value="Relationships/Family">Relationships/Family</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  )
}

export default AddHabit;
