class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

    def create
        new_user = User.create!(user_params)
        session[:user_id] = new_user.id
        render json: new_user, status: 201
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
