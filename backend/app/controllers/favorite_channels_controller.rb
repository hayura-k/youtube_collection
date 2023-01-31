class FavoriteChannelsController < ApplicationController
  def create
    channel = FavoriteChannel.new(favorite_channnel_params)

    if channel.save
      render json: {status: :ok}
    else
      render json: {status: :unprocessable_entity, error_messages: channel.errors.full_messages}
    end
  end

  def destroy
    channel = FavoriteChannel.find(params[:id])
    channel.destroy!
  end

  private

    def favorite_channnel_params
      params.require(:favorite_channel).permit(:name)
    end
end
