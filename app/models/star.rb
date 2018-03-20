class Star < ApplicationRecord
  belongs_to :habit
  delegate :user, :to => :habit, :allow_nil => true

  def self.find_max_streak(habit_id)
    stars = Star.where(habit_id: habit_id)
    days = stars.pluck(:day)
    streak = 0
    max_streak = 0

    days.each_with_index do |number, index|
      if number + 1 === days[index + 1]
        streak += 1
      else
        max_streak = streak if streak > max_streak
        streak = 0
      end
    end
    max_streak + 1
  end

  def self.find_current_streak(habit_id)
    stars = Star.where(habit_id: habit_id)
    days = stars.pluck(:day)
    array = days.reverse
    streak = 0

    array.each_with_index do |n, index|
      if n - 1 === array[index + 1]
        streak += 1
      else
        break
      end
    end

    streak + 1
  end
end
