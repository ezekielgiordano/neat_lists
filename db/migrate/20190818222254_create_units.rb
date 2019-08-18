class CreateUnits < ActiveRecord::Migration[6.0]
  	def change
    	create_table :units do |t|
    		t.string :name, null: false, unique: true
    		
    		t.belongs_to :army

    		t.timestamps null: false
    	end
  	end
end
