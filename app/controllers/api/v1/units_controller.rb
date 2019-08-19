class Api::V1::UnitsController < ApiController
 	protect_from_forgery unless: -> { request.format.json? }

  	def index
    	render json: Unit.all
  	end
end