class RenamePostColumn < ActiveRecord::Migration
  def change
    rename_column :posts, :post, :content
  end
end
