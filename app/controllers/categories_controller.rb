class CategoriesController < ApplicationController
    def products_index
        category = Category.find(params[:category_id])
        products = categories.products
        render json: products, include: :category
      end

      def show
        category = find_category
        products = category.products
        app_response(status: :created, data: products, include: :categories)
    end
   
    private
    def find_category
        Category.find(params[:id])
    end

end
