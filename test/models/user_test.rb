require 'test_helper'

class UserTest < ActiveSupport::TestCase
 
	def setup
		@user = User.new(name: "Example User", email: "me@mydomain.com")
	end

	test "no duplicates" do
		duplicate_user = @user.dup
		@user.save
		assert_not duplicate_user.valid?
	end

end
