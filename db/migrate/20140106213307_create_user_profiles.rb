class CreateUserProfiles < ActiveRecord::Migration
  def change
    create_table :user_profiles do |t|
      t.string :first_name
      t.string :last_name
      t.integer :user_id
      t.string :user_name
      t.timestamps
    end
  end
end
