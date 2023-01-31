Rails.application.routes.draw do
  resources :favorite_channels, only: [:create, :destroy]
end
