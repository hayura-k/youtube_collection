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
      {name: 'test'}
      # params.require(:).permit(:)
    end
end
