class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :username]

    def create
        user = User.find_by(username: params[:username])
            if user&.authenticate(params[:password])
                session[:user_id] = user.id
                render json: user,  status: :created
            else
                render json: {errors: "Invalid username or password"}, status: 401
            end
    end

    def show
        render json: @current_user, include: ['lineups'], status: 200
    end

    def username
        if (User.find_by(username: params[:username]))
            render json: {error: "username already exists"}, status: 401
        else
            head :no_content
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
