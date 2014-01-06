class AddAttachmentAssetToPosts < ActiveRecord::Migration
  def self.up
    change_table :posts do |t|
      t.attachment :asset
    end
  end

  def self.down
    drop_attached_file :posts, :asset
  end
end
