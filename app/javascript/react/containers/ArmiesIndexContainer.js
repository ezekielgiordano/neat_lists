import React, { Component } from "react"
import ArmiesFormContainer from './ArmiesFormContainer'
import ArmyTile from '../components/ArmyTile'

class ArmiesIndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			armies: []
		}
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
			this.setState({ armies: body })
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
			<div>
				<h2>Armies</h2>
				{armyTiles}
			</div>
		)
	}
}

export default ArmiesIndexContainer
