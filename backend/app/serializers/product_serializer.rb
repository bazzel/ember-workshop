class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :image, :review_ids
end
