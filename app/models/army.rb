class Army < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :alignment, presence: true, inclusion: { in: %w(Good Evil Neutral),
    message: "%{value} is not a valid alignment" }

	has_many :units, dependent: :destroy
end