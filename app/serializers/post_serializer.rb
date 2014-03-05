class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :asset, :tag_list

  def asset
    "#{object.asset.url(:medium)}"
  end
end
