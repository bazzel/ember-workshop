class Api::ReviewsController < ApplicationController
  def show
    render json: Review.find(params[:id])
  end
end
