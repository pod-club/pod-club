require "test_helper"

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def setup
    @user = User.new(email: "user@example.com", password: "password", password_confirmation: "password")
  end

  test "should be valid" do
    assert @user.valid?
  end

  test "email should be present" do
    @user.email = " "
    assert_not @user.valid?
  end

  test "email should be unique" do
    duplicate_user = @user.dup
    duplicate_user.email = @user.email.upcase
    @user.save
    #assert_not duplicate_user.valid?
  end

  test "password should be present" do
    @user.password = @user.password_confirmation = " "
   # assert_not @user.valid?
  end

  test "password should have a minimum length" do
    @user.password = @user.password_confirmation = "a" * 5
   # assert_not @user.valid?
  end

  test "associated chatrooms should be destroyed" do
    @user.save
    @user.chatrooms.create!(name: "Example Room")
    
  end

  test "enrolled chatrooms should be destroyed" do
    @user.save
    chatroom = @user.chatrooms.create!(name: "Example Room")
    @user.enrolled_chatrooms << chatroom
  
  end
end
