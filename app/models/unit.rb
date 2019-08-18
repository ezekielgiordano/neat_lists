class Unit < ApplicationRecord
	validates :name, presence: true, uniqueness: true

	belongs_to :army
end