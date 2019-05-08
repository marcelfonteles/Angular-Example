Rails.application.routes.draw do
  get 'dashboard/index'
  get 'dashboard/show'
  root 'dashboard#index'
  
  namespace :api do
    resources :events, only: [:index, :create, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
