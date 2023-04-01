class ProductController < ApplicationController
    #  before_action :verify_auth
    

    def create
      product = Product.new(product_params)
      if product.save
        app_response(data: product)
      else
        app_response(message: 'failed', status: 422, data: { info: product.errors.full_messages })
      end
    end

    def update
      product = Product.find(params[:id])
      if product.update(product_params)
        app_response(data: product)
      else
        app_response(message: 'failed', status: 422, data: { info: product.errors.full_messages })
      end
    end

    def destroy
      product = Product.find(params[:id])
      product.destroy
      app_response(data: product)
    end

    def index
        products = Product.all
        app_response(data: products)
    end

    private

    def product_params
      params.require(:product).permit(:name, :price, :description)
    end

 
  end