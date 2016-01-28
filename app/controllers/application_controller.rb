require "application_responder"

class ApplicationController < ActionController::API
  include Pundit

  # Responder gem check if necessary
  #include ActionController::MimeResponds
  self.responder = ApplicationResponder

  # Only talk JSON
  respond_to :json

  # Permissions Error Handling
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  private
  def user_not_authorized
    render json: ["You are not allowed to perform this action!"], :status => :forbidden
  end
end
