class Api::V1::ArmiesController < ApiController
  	def index
    	render json: Army.order(:name)
  	end

  	def show
  		render json: Army.find(params[:id])
  	end

  	def create
  		army = Army.new(army_data)

  		if army.save
  			render json: { army: army }
  		else
  			render json: { error: army.errors.full_messages.join(' * ') }
  		end
  	end

  	def update
  		army = Army.find(params[:id])
  		if army.update(army_data)
  			render json: { army: army }
  		else
  			render json: { error: army.errors.full_messages.join(' * ') }
  		end
  	end

  	def destroy
  		army = Army.find(params[:id])
  		army.destroy
  		render json: { army: army }
  	end

  	private

  	def army_data
  		params.permit(:name, :alignment)
  	end
end