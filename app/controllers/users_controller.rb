class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: User.find(params[:id])
  end

    # def create
    #     new_user = User.create!(user_params)
    #     session[:user_id] = new_user.id
    #     render json: new_user, status: 201
    # end

    
   

    def index
      render json: User.all
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
