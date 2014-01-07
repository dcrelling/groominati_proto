GroominatiProto::Application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :posts, :user_profiles
  end


  root :to => "home#index"
  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users
end