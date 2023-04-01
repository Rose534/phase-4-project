class Product < ApplicationRecord
  has_many :users
  has_many :product_categories
   has_many :categories, through: :product_categories

    validates :name, {
        length: { minimum: 3, maximum: 30 },
        presence: true
      }
    
      validates :description, {
        length: { minimum: 10 },
        presence: true
      }
end
