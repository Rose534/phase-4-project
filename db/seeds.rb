
User.create(username: "john_doe", email: "john@gmail.com", password: "password")
User.create(username: "jane_doe", email: "jane@gmail.com", password: "password")
User.create(username: "alex_jay", email: "alex@gmail.com", password: "password")
User.create(username: "yurub", email: "yurub@gmail.com", password: "password")
# Create some products
iphone = Product.create(name: "iPhone", description: "Smartphone from Apple", price: 999, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRzqgBAx8FkgTrVmHWR2jhUVNyuEL0-WZ637G-GC564YyBCwv9sVuDtJ1aYVVJFxNy4PhWZL3PGAw&usqp=CAc")
macbook = Product.create(name: "MacBook Pro", description: "Laptop from Apple", price: 1999, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbn3HGc9LOFIszXn3U-bv8c2Q5xmHcahG2xSKHd3KD12sS-e5ImhAHhq-oUnLWceYSfaEdgkt_jA&usqp=CAc")
tshirt = Product.create(name: "T-Shirt", description: "Cotton T-Shirt", price: 25, image: "https://media.istockphoto.com/id/1328049223/photo/mens-short-sleeve-t-shirt-mockup-in-front-and-back-views.jpg?s=612x612&w=is&k=20&c=N3u_nC81GyXd4BF11YJ2JNm4X1jBJhtKi_jBWX_2Q0c=")
coffee_maker = Product.create(name: "Coffee Maker", description: "Automatic coffee maker", price: 99, image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJSAZTBCOXuCsKi9c2Eux3qJ-iMLq-ZR_pQhw27YwG-LfoVeS7FM3qgj6qd3ZLinRhIdQQYHf_0ti2&usqp=CAc")

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


