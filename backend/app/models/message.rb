class Message < ApplicationRecord
  belongs_to :user
  belongs_to :chatroom
  belongs_to :parent_message, class_name: "Message", optional: true
  has_many :replies, class_name: "Message", foreign_key: "parent_message_id"
  has_many_attached :image
end
