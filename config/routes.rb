GroominatiProto::Application.routes.draw do
  resources :user_profiles

  root :to => "home#index"
  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users
end