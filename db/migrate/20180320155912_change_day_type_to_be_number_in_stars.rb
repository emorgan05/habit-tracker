class ChangeDayTypeToBeNumberInStars < ActiveRecord::Migration[5.1]
  def change
    change_column :stars, :day, :integer, using: 'day::integer'
  end
end
