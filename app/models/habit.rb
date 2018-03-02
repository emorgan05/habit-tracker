class Habit < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :stars
end
