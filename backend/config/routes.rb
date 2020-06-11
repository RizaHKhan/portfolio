Rails.application.routes.draw do
  get 'signup/create'
  namespace :api do
    namespace :v1 do
      resources :blogs
    end
  end
  root to: "home#index"
end
