require "application_responder"

class ApplicationController < ActionController::API
  include Pundit

  # Responder gem check if necessary
  #include ActionController::MimeResponds
  self.responder = ApplicationResponder

  # Only talk JSON
  respond_to :json

  ##### Error Handling
  # Permissions
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  # 404 bad id
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  private
  def user_not_authorized
    render json: ["You are not allowed to perform this action!"], :status => :forbidden
  end
  def record_not_found(error)
    render :json => {:error => error.message}, :status => :not_found
  end
end
