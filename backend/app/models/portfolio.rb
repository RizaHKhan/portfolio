class Portfolio < ApplicationRecord
  belongs_to :user

  validates :title, :subtitle, :description, :imagepreview, :imagemainone, presence: true
end
