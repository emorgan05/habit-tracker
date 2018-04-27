module Api::V1
  class UsersController < ApplicationController
    def create
      user = User.new(user_params)
      if user.save
        render json: user
      end
    end

    private
    def user_params
      params.require(:credentials).permit(:email, :password)
    end
  end
end
