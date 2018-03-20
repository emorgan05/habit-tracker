class StarsController < ApplicationController
  def create
    current_habit = Habit.find(params[:habit_id])
    star = Star.new(star_params)
    if star.save
      render json: star
    end
  end

  private
  def star_params
    params.require(:star).permit(:day, :completed, :habit_id)
  end
end
