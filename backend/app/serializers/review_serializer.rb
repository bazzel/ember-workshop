class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :rating, :user, :created_at
end
