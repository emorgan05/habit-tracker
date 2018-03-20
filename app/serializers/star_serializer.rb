class StarSerializer < ActiveModel::Serializer
  attributes :id, :day, :completed
  belongs_to :habit
end
