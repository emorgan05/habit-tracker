class User < ApplicationRecord
  has_secure_password

  has_many :habits
  has_many :stars, through: :habits
end
