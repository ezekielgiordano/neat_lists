class CreateArmies < ActiveRecord::Migration[6.0]
  	def change
    	create_table :armies do |t|
    		t.string :name, null: false, unique: true

    		t.timestamps null: false
    	end
  	end
end
