Rails.application.routes.draw do
  root "pages#index"
  get "/home", to: "pages#index"
  get "/about", to: "pages#about"
  get "/clients", to: "pages#clients"
  get "/contact", to: "pages#contact"
  get "/employment", to: "pages#employment"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
