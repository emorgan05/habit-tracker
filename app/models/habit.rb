class Habit < ApplicationRecord
  belongs_to :users
  belongs_to :categories
  has_many :stars
end
