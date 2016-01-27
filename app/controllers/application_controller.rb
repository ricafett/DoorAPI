require "application_responder"

class ApplicationController < ActionController::API
  self.responder = ApplicationResponder
  respond_to :json

  #include ActionController::MimeResponds
  #respond_to :json
end
