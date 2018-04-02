Rails.application.routes.draw do
  resources :users, :habits, :stars, :categories
  mount Knock::Engine => "/knock"
  post 'user_token' => 'user_token#create'
end
