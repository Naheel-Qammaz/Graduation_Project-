class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_and_belongs_to_many :blogs, through: :blogs_tags
end
