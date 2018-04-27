module API::V1
  class StarsController < ApplicationController
    def create
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
end
