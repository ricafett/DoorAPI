require 'jwt'

class GetWebsocketController < ApplicationController
  before_filter :authenticate_user!
  def new
    payload = {:id => current_user.id, :name => current_user.name, :admin => current_user.admin}
    token = JWT.encode payload, ENV["token_secret"], 'HS256'
    render json: {:token => token}
  end
end
