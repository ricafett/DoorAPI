class SessionsController < Devise::SessionsController
  private
  def respond_to_on_destroy
      head :ok
  end
end
