Rails.application.routes.draw do
  resources :favorite_channels, only: %i[index create destroy]
end
