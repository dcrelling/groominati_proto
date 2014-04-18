class Post < ActiveRecord::Base
  belongs_to :user
  acts_as_taggable
  include Twitter::Extractor
  has_attached_file :asset, :styles => { :medium => "200x", :thumb => "100x100#" }, :default_url => "/images/:style/missing.png"
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :asset, :content_type => /\Aimage\/.*\Z/

  #def extract_tags
   # extract_hashtags(self.content)
  #end

  def build_tags(tags)
    JSON.parse(tags).each { |a| self.tag_list.add(a['text']) }
  end

end
