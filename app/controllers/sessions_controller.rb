# class SessionsController < ApplicationController
#   skip_before_action :require_login, only: [:new, :create]

#   def new
#   end

#   def create
#     user = User.find_by(email: params[:email].downcase)
#     if user && user.authenticate(params[:password])
#       log_in user
#       redirect_to root_path, success: 'Logged in successfully!'
#     else
#       flash.now[:danger] = 'Invalid email/password combination'
#       render 'new'
#     end
#   end

#   def destroy
#     log_out
#     redirect_to login_path, success: 'Logged out successfully!'
#   end
# end
