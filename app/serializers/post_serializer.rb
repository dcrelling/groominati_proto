class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :asset, :tag_list, :original

  def asset
    "#{object.asset.url(:medium)}"
  end

  def original
    "#{object.asset.url(:original)}"
  end
end
