class Unit < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :unit_size, presence: true
	validates :unit_strength, presence: true
    validates :speed, presence: true
    validates :melee, presence: true
    validates :ranged, presence: true
    validates :defense, presence: true
    validates :attacks, presence: true
    validates :points, presence: true, numericality: true
    validates :army_name, presence: true

	belongs_to :army

    def army_name_from_id
        Army.find_by_id(self.army_id).name
    end
end