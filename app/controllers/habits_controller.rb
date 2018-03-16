class HabitsController < ApplicationController
  before_action :authenticate_user

  def index
    @habits = current_user.habits
    render json: @habits
  end

  def create
    @habit = Habit.new(habit_params)
    if @habit.save
      render json: @habit
    end
  end

  private
  
  def habit_params
    params.require(:habit).permit(:name, :description, :number_of_days, :category_id, :user_id, :stars)
  end
end
