class CreatePortfolios < ActiveRecord::Migration[6.0]
  def change
    create_table :portfolios do |t|
      t.string :title
      t.string :subtitle
      t.string :imagepreview
      t.string :imagemainone
      t.string :imagemaintwo
      t.string :imagemainthree
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
