class Api::V1::UsersController < ApiController
 	protect_from_forgery unless: -> { request.format.json? }

  	def index
    	render json: User.all
  	end
end