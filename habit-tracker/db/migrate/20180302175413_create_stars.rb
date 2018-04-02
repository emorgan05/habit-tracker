class CreateStars < ActiveRecord::Migration[5.1]
  def change
    create_table :stars do |t|
      t.datetime :date
      t.boolean :completed
      t.belongs_to :habit
      t.timestamps
    end
  end
end
