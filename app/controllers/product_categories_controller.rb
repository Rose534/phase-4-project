class ProductCategoriesController < ApplicationController
    def index
      products = Product.includes(:categories)
      render json: products.as_json(include: :categories)
    end
  end
  