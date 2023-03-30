# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding"
 
# electronics = Category.create(name: "Electronics")
# fashion = Category.create(name: "Fashion")
# kitchen = Category.create(name: "Kitchen")
# food = Category.create(name: "Food")
# Create some users
user1 = User.create(username: "john_doe", email: "john@gmail.com", password: "password")
user2 = User.create(username: "jane_doe", email: "jane@gmail.com", password: "password")
user3 = User.create(username: "alex_jay", email: "alex@gmail.com", password: "password")
user4 = User.create(username: "yurub", email: "yurub@gmail.com", password: "password")
# Create some products
iphone = Product.create(name: "iPhone", description: "Smartphone from Apple", price: 999, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRzqgBAx8FkgTrVmHWR2jhUVNyuEL0-WZ637G-GC564YyBCwv9sVuDtJ1aYVVJFxNy4PhWZL3PGAw&usqp=CAc")
macbook = Product.create(name: "MacBook Pro", description: "Laptop from Apple", price: 1999, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbn3HGc9LOFIszXn3U-bv8c2Q5xmHcahG2xSKHd3KD12sS-e5ImhAHhq-oUnLWceYSfaEdgkt_jA&usqp=CAc")
tshirt = Product.create(name: "T-Shirt", description: "Cotton T-Shirt", price: 25, image: "https://media.istockphoto.com/id/1328049223/photo/mens-short-sleeve-t-shirt-mockup-in-front-and-back-views.jpg?s=612x612&w=is&k=20&c=N3u_nC81GyXd4BF11YJ2JNm4X1jBJhtKi_jBWX_2Q0c=")
coffee_maker = Product.create(name: "Coffee Maker", description: "Automatic coffee maker", price: 99, image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJSAZTBCOXuCsKi9c2Eux3qJ-iMLq-ZR_pQhw27YwG-LfoVeS7FM3qgj6qd3ZLinRhIdQQYHf_0ti2&usqp=CAc")
# Assign categories to products
# iphone.categories << electronics
# macbook.categories << electronics
# tshirt.categories << fashion
# coffee_maker.categories << kitchen
# Assign products to users
# user1.products << iphone
# user2.products << macbook
# user3.products << tshirt
# user4.products << coffee_maker
 
puts "done seeding"
