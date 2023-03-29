Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  post '/users', to: 'users#register'
  post '/users/login', to: 'users#login'
  delete '/users/logout', to: 'users#logout'

  # product routes
  post '/product', to: 'product#create'
  put '/product/:id', to: 'product#update'
  delete '/product/:id', to: 'product#destroy'
  get '/product', to: 'product#index'
end
