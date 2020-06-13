class CreatePortfolios < ActiveRecord::Migration[6.0]
  def change
    create_table :portfolios do |t|
      t.string :title, null: false
      t.string :subtitle, null: false
      t.string :description, null: false
      t.string :imagepreview, null: false
      t.string :imagemainone, null: false
      t.string :imagemaintwo
      t.string :imagemainthree
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
