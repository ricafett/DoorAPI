class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_filter :authenticate_user!
  after_action :verify_authorized

  # GET /users
  # GET /users.json
  def index
    @users = User.all
    authorize User
    render json: @users
  end

  # GET /users/1
  # GET /users/1.json
  def show
    authorize @user
    render json: @user
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)
    authorize @user
    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    @user = User.find(params[:id])
    authorize @user
    if @user.update(user_params)
      head :no_content
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    authorize @user
    @user.destroy

    head :no_content
  end

  private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.permit(:name, :email, :password, :password_confirmation, :admin)
    end
end
