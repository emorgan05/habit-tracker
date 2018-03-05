class HabitsController < ApplicationController
  def index
    @habits = current_user.habits
    render json: @habits
  end
end
