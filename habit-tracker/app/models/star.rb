class Star < ApplicationRecord
  belongs_to :habit
  delegate :user, :to => :habit, :allow_nil => true
end
