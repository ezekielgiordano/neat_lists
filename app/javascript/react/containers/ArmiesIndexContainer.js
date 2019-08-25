import React, { Component } from "react"
import ArmiesFormContainer from './ArmiesFormContainer'
import ArmyTile from '../components/ArmyTile'

class ArmiesIndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			armies: []
		}
		this.addToDatabase = this.addToDatabase.bind(this)
	}

	componentDidMount() {
		fetch('/api/v1/armies')
		.then(response => {
			if (response.ok) {
				return response
			} else {
				let errorMessage = `${response.status} (${response.statusText})`,
				error = new Error(errorMessage)
				throw(error)
			}
		})
		.then(response => response.json())
		.then(body => {
			this.setState({
				armies: body
			})
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	addToDatabase(dataToAdd) {
		fetch('/api/v1/armies', {
			method: 'POST',
			body: JSON.stringify(dataToAdd),
			credentials: 'same-origin',
        	headers: {'Content-Type': 'application/json'}
		})
		.then(response => {
			if (response.ok) {
				return response
			} else {
				let errorMessage = `${response.status} (${response.statusText})`,
				error = new Error(errorMessage)
				throw(error)
			}
		})
		.then(response => response.json())
		.then(body => {
			let updatedState = this.state.armies.concat(body)
			this.setState({				
				armies: updatedState
			})
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	render() {
		const armyTiles = this.state.armies.map(army => {
			return (
				<ArmyTile
					key={army.id}
					id={army.id}
					name={army.name}
					alignment={army.alignment}
				/>
			)
		})

		return (
			<div className="index-container">
				<h2>Armies</h2>
				{armyTiles}
				<div className="form-container">
					<ArmiesFormContainer
						addToDatabase={this.addToDatabase}
					/>
				</div>
			</div>
		)
	}
}

export default ArmiesIndexContainer
