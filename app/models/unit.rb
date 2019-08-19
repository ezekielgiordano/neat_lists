class Unit < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :unit_size, presence: true
	validates :unit_strength, presence: true
    validates :speed, presence: true
    validates :melee, presence: true
    validates :ranged, presence: true
    validates :defense, presence: true
    validates :attacks, presence: true
    validates :points, presence: true

	belongs_to :army
end