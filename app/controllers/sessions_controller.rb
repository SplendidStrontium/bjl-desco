class SessionsController < ApplicationController

  def new
  end

	def create
		user = User.find_by(email: params[:session][:email].downcase)
		if user && user.authenticate(params[:session][:password])
			# log in the user and redirect to show page
		else
			flash.now[:danger] = 'Invalid user/password combination'
			render 'new'
		end
	end

	def destroy
	end
end
