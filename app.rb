require 'sinatra'
require 'httparty'
require 'json'
require 'pry'
require './config'

get '/' do
  erb :index
end

get '/search' do
  params['api_key'] = ENV['api_key']
  url = "http://index1.homeflow.co.uk/properties"
  @data = HTTParty.get(url, query: params)
  content_type :json
  @data['result']['properties']['elements'].to_json
end
