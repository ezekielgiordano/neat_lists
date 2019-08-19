class Api::V1::ListsController < ApiController
 	protect_from_forgery unless: -> { request.format.json? }

  	def index
    	render json: List.all
  	end
end