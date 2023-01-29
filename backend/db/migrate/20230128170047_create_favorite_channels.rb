class CreateFavoriteChannels < ActiveRecord::Migration[7.0]
  def change
    create_table :favorite_channels do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
