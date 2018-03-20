class ChangeDateToBeStringInStars < ActiveRecord::Migration[5.1]
  def change
    change_column :stars, :date, :string
  end
end
