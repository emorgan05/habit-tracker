class StarSerializer < ActiveModel::Serializer
  attributes :id, :date, :completed
  belongs_to :habit
end
