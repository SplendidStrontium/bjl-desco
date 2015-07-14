require 'test_helper'

class UserTest < ActiveSupport::TestCase
 
	def setup
		@user = User.new(name: "Example User", email: "me@mydomain.com")
	end

	test "email should be proper format" do
		valid_addresses = %w[user@example.com USER@foo.com A_US-ER@foo.bar.org
													first.last@foo.jp alice+bob@baz.cn]
		valid_addresses.each do |valid_address|
			@user.email = valid_address
			assert @user.valid?, "#{valid_address.inspect} should be valid"
		end
	end

	test "email should reject bad emails" do
		invalid_addresses = %w[user@example,com user_at_foo.org user.name@example.
														foo@bar_baz.com foo@bar+baz.com]
		invalid_addresses.each do |invalid_address|
			@user.email = invalid_address
			assert_not @user.valid?, "#{invalid_address.inspect} should be valid"
		end
	end

end
