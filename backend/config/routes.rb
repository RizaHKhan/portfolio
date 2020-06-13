Rails.application.routes.draw do
  resources :portfolios
  get "signup/create"
  namespace :api do
    namespace :v1 do
      resources :blogs
    end
  end

  root to: "home#index"

  post "refresh", controller: :refresh, action: :create
  post "signin", controller: :signin, action: :create
  post "signup", controller: :signup, action: :create
  delete "signin", controller: :signin, action: :destroy
end
