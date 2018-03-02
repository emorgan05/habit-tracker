class Star < ApplicationRecord
  belongs_to :habits
  delegate :user, :to => :habit, :allow_nil => true
end
