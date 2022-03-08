class CreateLineups < ActiveRecord::Migration[6.1]
  def change
    create_table :lineups do |t|
      t.integer :catcher_id
      t.integer :first_id
      t.integer :second_id
      t.integer :third_id
      t.integer :short_id
      t.integer :left_id
      t.integer :center_id
      t.integer :right_id
      t.integer :user_id
      t.timestamps
    end
  end
end
