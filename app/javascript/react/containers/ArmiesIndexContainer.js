import React, { Component } from "react"
import ArmiesFormContainer from './ArmiesFormContainer'
import ArmyTile from '../components/ArmyTile'

class ArmiesIndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			armies: []
		}
		this.addArmy = this.addArmy.bind(this)
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

	addArmy(newArmy) {
		fetch('/api/v1/armies', {
			method: 'POST',
			body: JSON.stringify(newArmy)
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
			let armiesWithNewArmy = this.state.armies.concat(body)
			this.setState({
				armies: armiesWithNewArmy
			})
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	render() {
		const armyTiles = this.state.armies.map(army => {
			return(
				<ArmyTile
					key={army.id}
					id={army.id}
					name={army.name}
					alignment={army.alignment}
				/>
			)
		})

		return(
			<div>
				{armyTiles}
				<ArmiesFormContainer addArmy={this.addArmy} />
			</div>
		)
	}
}

export default ArmiesIndexContainer
