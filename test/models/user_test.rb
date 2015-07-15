require 'test_helper'

class UserTest < ActiveSupport::TestCase
 
	def setup
		@user = User.new(name: "Example User", email: "me@mydomain.com",
											password: "foobar", password_confirmation: "foobar")
	end


end
