class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.string :image
      t.belongs_to :user, foreign_key: true
      t.timestamps
    end
  end
end
