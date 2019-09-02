class User < ApplicationRecord
	EMAIL_FORMAT = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
	PASSWORD_FORMAT = /\A
	  	(?=.{8,20})        # Must contain 8 or more characters
	  	(?=.*\d)           # Must contain a digit
	  	(?=.*[a-z])        # Must contain a lower case character
	  	(?=.*[A-Z])        # Must contain an upper case character
	  	(?=.*[[:^alnum:]]) # Must contain a symbol
	/x

	validates :username, presence: true, uniqueness: true
	validates :email,
		presence: true,
		uniqueness: true,
		confirmation: true,
		format: {
			with: EMAIL_FORMAT,
			message: 'The email address must have a valid format'
		}
	validates :email_confirmation, presence: true
	validates :password,
		presence: true,
		confirmation: true,
		format: {
			with: PASSWORD_FORMAT,
			message:
				"The password needs... \n
				Eight or more total characters\n
				One or more numeral(s)\n
				One or more lower case letter(s)\n
				One or more capital letter(s)\n
				One or more other symbols"
		}
	validates :password_confirmation, presence: true
	validates :role,
		presence: true,
		inclusion: {
			in: %w(member admin),
    		message: "%{value} is not a valid role"
    	}

	has_many :lists, dependent: :destroy

	def admin?
		role == 'admin'
	end
end