Rails.application.routes.draw do
  resources :favorite_channel, only: [:create, :destroy]
end
