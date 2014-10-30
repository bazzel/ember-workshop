Rails.application.routes.draw do
  namespace :api do
    resources :products
    resources :reviews
    resources :categories
  end
end
