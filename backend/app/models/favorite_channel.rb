class FavoriteChannel < ApplicationRecord
  validates :name, presence: true
end
