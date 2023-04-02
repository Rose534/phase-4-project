# class ProductCategoriesController < ApplicationController
#     def index
#         productcategories = ProductCategory.all
#         render json: productcategories
#     end
# end
class ProductCategoriesController < ApplicationController
    def create
        product_category = ProductCategory.create(product_params) 
        if product_category.valid?
            app_response(status: :created, data: product_category)
        else
            app_response(status: :unprocessable_entity, data: product_category.errors, message: 'failed')
        end
    end

    private
    def product_params
        params.permit(:name,:description,:price,:image,:user_id)
end
