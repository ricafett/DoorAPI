class FingerprintsController < ApplicationController
  before_action :set_user
  before_filter :authenticate_user!
  after_action :verify_authorized

  def create
    authorize @user

    $redis.publish 'addFingerprint', @user.to_json
    # if @user.save
    #   render json: @user, status: :created, location: @user
    # else
    #   render json: @user.errors, status: :unprocessable_entity
    # end
    render :ok
  end


  def destroy
    authorize @user
    #@user.destroy

    head :no_content
  end

  private

    def set_user
      @user = User.find(params[:user_id])
    end

    def user_params
      params.permit(:name, :email, :password, :password_confirmation, :admin)
    end
end
