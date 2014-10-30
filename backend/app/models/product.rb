class Product < ActiveRecord::Base
  has_many :reviews, -> { order(created_at: :desc) }, dependent: :destroy
  belongs_to :category
  validates_presence_of :title
end
