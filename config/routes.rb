Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, :habits, :stars, :categories
      post 'user_token' => 'user_token#create'
    end
  end

  mount Knock::Engine => "/knock"
end
