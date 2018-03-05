class HabitsController < ApplicationController
  def index
    @habits = Habit.all
    render json: @habits
  end
end
