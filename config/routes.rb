Rails.application.routes.draw do
  
  get 'password_resets/new'
  get 'password_resets/create'
  get 'password_resets/edit'
  get 'password_resets/update'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
    post '/users', to: 'users#register'
    post '/login', to: 'users#login'
    delete '/logout', to: 'users#logout'

    # product routes
    post '/product', to: 'product#create'
    put '/product/:id', to: 'product#update'
    delete '/product/:id', to: 'product#destroy'
    get '/product', to: 'product#index'

    # reset password routes 

    post '/password/reset', to: 'password_resets#reset_password'
     
end
