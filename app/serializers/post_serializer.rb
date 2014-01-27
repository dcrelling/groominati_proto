class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :asset

  def asset
    "#{object.asset.url}"
  end
end
