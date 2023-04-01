class ProductController < ApplicationController

    before_action :verify_auth, only: [:create, :update, :destroy]
     

    def index
        products = Product.all
        app_response(message: 'success', data: products)
    end

    def create
        product = Product.create(product_params)
        if product.valid?
            app_response(status: :created, data: product)
        else
            app_response(status: :unprocessable_entity, data: product.errors, message: 'failed')
        end
    end
    
    def update
        product = current_user.products.find(params[:id])
        if product.update(product_params)
          app_response(data: { info: 'updated product successfully' })
        else
            app_response(message: 'failed', data: { info: 'could not update product'}, status: :unprocessable_entity)
        end
      end

    def destroy
        user.product.find(params[:id]).destroy
        app_response(message: 'success', data: { info: 'deleted product successfully' }, status: 204)
    end

    

    private

    def product_params
        params.permit(:name, :description, :price, :image)
    end

end
