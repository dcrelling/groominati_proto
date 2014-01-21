class Post < ActiveRecord::Base
  belongs_to :user
  acts_as_taggable
  include Twitter::Extractor
  has_attached_file :asset, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"

  def extract_tags
    extract_hashtags(self.content)
  end
end
