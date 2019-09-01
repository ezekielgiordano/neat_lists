import React, { Component } from "react"
import UnitTile from '../components/UnitTile'

class UnitsIndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			units: []
		}
	}

	componentDidMount() {
		fetch('/api/v1/units')
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
			this.setState({ units: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	render() {
		const unitTiles = this.state.units.map(unit => {
			return (
				<UnitTile
					key={unit.id}
					id={unit.id}
					name={unit.name}
					unitSize={unit.unit_size}
					unitStrength={unit.unit_strength}
					speed={unit.speed}
					melee={unit.melee}
					ranged={unit.ranged}
					defense={unit.defense}
					attacks={unit.attacks}
					points={unit.points}
					special={unit.special}
					army={unit.army_id}
				/>
			)
		})

		return (
			<div className="index-container">
				<h2>Units</h2>
				{unitTiles}
			</div>
		)
	}
}

export default UnitsIndexContainer
