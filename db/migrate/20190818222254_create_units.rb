class CreateUnits < ActiveRecord::Migration[6.0]
  	def change
    	create_table :units do |t|
    		t.string :name, null: false, unique: true
    		t.string :unit_size, null: false
    		t.string :unit_strength, null: false
    		t.string :speed, null: false
    		t.string :melee, null: false
    		t.string :ranged, null: false
    		t.string :defense, null: false
    		t.string :attacks, null: false
    		t.integer :points, null: false
    		t.text :special

    		t.belongs_to :army

    		t.timestamps null: false
    	end
  	end
end
