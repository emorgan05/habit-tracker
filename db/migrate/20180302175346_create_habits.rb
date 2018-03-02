class CreateHabits < ActiveRecord::Migration[5.1]
  def change
    create_table :habits do |t|
      t.string :name
      t.string :description
      t.integer :number_of_days
      t.belongs_to :user
      t.belongs_to :category
      t.timestamps
    end
  end
end
