class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :number_of_days, :max_streak, :current_streak
  belongs_to :user
  belongs_to :category
  has_many :stars

  def max_streak
    stars = Star.where(habit_id: object.id)
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
    max_streak
  end

  def current_streak
    stars = Star.where(habit_id: object.id)
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

    streak
  end
end
