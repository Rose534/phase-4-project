class ProductsController < ApplicationController

    before_action :verify_auth

    def create
        product = user.product.create(product_params)
        if product.valid?
            app_response(status: :created, data: product)
        else
            app_response(status: :unprocessable_entity, data: product.errors, message: 'failed')
        end
    end
    
    def update
        product = user.product.find(params[:id]).update(product_params)
        if product
            app_response(data: { info: 'updated product successfully' })
        else
            app_response(message: 'failed', data: { info: 'something went wrong. could not update product' }, status: :unprocessable_entity)
        end
    end

    def destroy
        user.product.find(params[:id]).destroy
        app_response(message: 'success', data: { info: 'deleted product successfully' }, status: 204)
    end

    def index
        product = user.product.all
        app_response(message: 'success', data: todos)
    end

    private

    def product_params
        params.permit(:name, :description, :price, :image)
    end

end
