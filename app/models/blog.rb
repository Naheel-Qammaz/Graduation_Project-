class Blog < ApplicationRecord

  validates :title, presence: true
  validates :body, presence: true
  validates :user_id, presence: true

  belongs_to :user
  has_and_belongs_to_many :tags, through: :blogs_tags

end
