GroominatiProto::Application.routes.draw do


  resources :posts, defaults: {format: :json}
  resources :user_profiles, defaults: {format: :json}


  root :to => "home#index"
  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users
end