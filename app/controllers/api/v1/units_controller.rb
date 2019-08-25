class Api::V1::UnitsController < ApiController
 	protect_from_forgery unless: -> { request.format.json? }

  	def index
    	unsorted_units = Unit.all
        units = unsorted_units.sort {
            |x, y| x.name.sub(/^(the|a|an)\s/i, "").downcase <=>
            y.name.sub(/^(the|a|an)\s/i, "").downcase
        }

    	render json: units
  	end
end