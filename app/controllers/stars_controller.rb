class StarsController < ApplicationController
  def create
    current_habit = Habit.find(params[:habit_id])
    star = Star.new(star_params)
    render json: star
  end

  private
  def star_params
    params.require(:star).permit(:date, :completed)
  end
end
