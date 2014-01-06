class User < ActiveRecord::Base
  rolify

  has_one :user_profile, :dependent => :destroy
  has_many :posts, :dependent => :destroy
  accepts_nested_attributes_for :user_profile
  acts_as_follower
  acts_as_followable

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :invitable, :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable
end
