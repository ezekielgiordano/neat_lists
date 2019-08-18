class CreateUsers < ActiveRecord::Migration[6.0]
  	def change
    	create_table :users do |t|
    		t.string :username, null: false, unique: true
    		t.string :email, null: false, unique: true
    		t.string :password, null: false
    		t.string :role, null: false, default: 'member'

    		t.timestamps null: false 	
    	end
  	end
end
