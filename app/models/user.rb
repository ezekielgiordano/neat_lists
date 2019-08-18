class User < ApplicationRecord
	validates :username, presence: true, uniqueness: true
	validates :email, presence: true, uniqueness: true, confirmation: true
	validates :email_confirmation, presence: true
	validates :password, presence: true, length: { minimum: 8 }
	validates :role, presence: true, inclusion: { in: %w(member admin),
    message: "%{value} is not a valid role" }

	has_many :lists, dependent: :destroy

	def admin?
		role == 'admin'
	end
end