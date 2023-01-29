require 'rails_helper'

RSpec.describe FavoriteChannel, type: :model do
  describe 'validations' do
    describe 'name' do
      context 'presence' do
        let!(:favorite_channel){ FavoriteChannel.new }

        it '有効である' do
          expect(favorite_channel.valid?).to eq false
        end
      end
    end
  end
end
