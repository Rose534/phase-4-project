class ProductCategoriesController < ApplicationController
    def index
        productcategories = ProductCategory.all
        render json: productcategories
    end
end
