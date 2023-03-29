class Product < ApplicationRecord
  belongs_to :user
  has_many :product_categories
  has_many :categories, through: :product_categories

    validates :name, {
        length: { minimum: 3, maximum: 15 },
        presence: true
      }
    
      validates :description, {
        length: { minimum: 10 },
        presence: true
      }
end
