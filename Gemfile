source 'https://rubygems.org'
ruby '2.0.0'
gem 'rails', '4.0.0'
#gem 'sqlite3'         for heroku
gem 'pg', '~> 0.17.1'  # heroku only allows postgres
gem 'sass-rails', '~> 4.0.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 1.2'
gem 'cancan'        # for assigning roles to users
gem 'devise'     # for authentication
gem 'devise_invitable'           #for authentication
gem 'figaro'
gem 'rolify'
gem 'paperclip'   #for attaching files to models
gem 'acts_as_follower' #allows following of users
gem 'acts-as-taggable-on'  # for tagging
gem 'active_model_serializers' #for rendering models and json easily
group :development do
  gem 'better_errors'
  gem 'binding_of_caller', :platforms=>[:mri_19, :mri_20, :rbx]
  gem 'guard-bundler'
  gem 'guard-rails'
  gem 'guard-rspec'
  gem 'quiet_assets'
  gem 'rb-fchange', :require=>false
  gem 'rb-fsevent', :require=>false
  gem 'rb-inotify', :require=>false
end
group :development, :test do
  gem 'factory_girl_rails'
  gem 'rspec-rails'
end
group :test do
  gem 'capybara'
  gem 'database_cleaner', '1.0.1'
  gem 'email_spec'
end
gem 'rails_12factor', group: :production


ruby "2.0.0"
