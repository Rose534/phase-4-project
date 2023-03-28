# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create(name: "Electronics")
Category.create(name: "fashion")
Category.create(name: "kitchen")
Category.create(name: "food")



# create some sample product categories
ProductCategory.create(product_id: 1, category_id: 1) # Assign product 1 to Electronics category
ProductCategory.create(product_id: 2, category_id: 2) # Assign product 2 to Fashion category
ProductCategory.create(product_id: 3, category_id: 1) # Assign product 3 to Electronics category
ProductCategory.create(product_id: 3, category_id: 3) # Assign product 3 to Kitchen category
ProductCategory.create(product_id: 4, category_id: 4) # Assign product 4 to Food category


