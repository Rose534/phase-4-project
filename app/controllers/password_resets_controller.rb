class PasswordResetsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user
      token = SecureRandom.urlsafe_base64
      expires_at = 1.hour.from_now
      user.password_resets.create(token: token, expires_at: expires_at)
      redirect_to '/login', notice: 'We have sent you an email with instructions on how to reset your password.'
    else
      render 'Email not found'
      
    end
  end

  def edit
    @user = PasswordReset.find_by_token(params[:token])&.user
    unless @user
      redirect_to '/login', alert: 'Invalid or expired token'
    end
  end

  def update
    @user = PasswordReset.find_by_token(params[:token])&.user
    if @user && @user.update(password_params)
      @user.password_resets.destroy_all
      redirect_to '/login', notice: 'Your password was reset successfully. Please sign in.'
    else
      render 'edit'
    end
  end

  private

  def password_params
    params.require(:user).permit(:password, :password_confirmation)
  end
end
