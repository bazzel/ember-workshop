class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :image
end
