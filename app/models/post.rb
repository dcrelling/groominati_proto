class Post < ActiveRecord::Base
  belongs_to :user
  acts_as_taggable
  include Twitter::Extractor
  #attr_accessible :post, :user_id, :asset, :tag_list
  has_attached_file :asset, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
end
