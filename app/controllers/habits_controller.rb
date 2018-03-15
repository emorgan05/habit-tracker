class HabitsController < ApplicationController
  # before_action :authenticate_user
  
  def index
    @habits = Habit.all
    render json: @habits
  end
end
