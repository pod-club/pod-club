class User < ApplicationRecord
    has_secure_password

    has_many :chatrooms
    has_many :messages


    validates_presence_of :email
    validates_uniqueness_of :email
end
