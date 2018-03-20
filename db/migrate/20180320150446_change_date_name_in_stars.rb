class ChangeDateNameInStars < ActiveRecord::Migration[5.1]
  def change
    rename_column :stars, :date, :day
  end
end
