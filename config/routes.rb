Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, :habits, :stars, :categories
      mount Knock::Engine => "/knock"
      post 'user_token' => 'user_token#create'
    end
  end  
end
