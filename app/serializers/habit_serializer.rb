class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :number_of_days
  belongs_to :user
  belongs_to :category
end
