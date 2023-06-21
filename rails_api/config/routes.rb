Rails.application.routes.draw do
  scope '/api' do
    get '/hello', to: 'hello#world'
  end
end