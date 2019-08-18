class Army < ApplicationRecord
	validates :name, presence: true, uniqueness: true

	has_many :units, dependent: :destroy
end