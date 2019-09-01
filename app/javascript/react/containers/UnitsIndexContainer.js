import React, { Component } from 'react'
import UnitTile from '../components/UnitTile'
import UnitDeletionTile from '../components/UnitDeletionTile'

class UnitsIndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			units: [],
			idToDelete: '',
			nameToDelete: '',
			deletionSuccessMessage: ''
		}
		this.showDeletionTile = this.showDeletionTile.bind(this)
		this.hideDeletionTile = this.hideDeletionTile.bind(this)
		this.showDeletionSuccessMessage = this.showDeletionSuccessMessage.bind(this)
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

	showDeletionTile(id, name) {
		this.setState({ idToDelete: id, nameToDelete: name })
	}

	hideDeletionTile() {
		this.setState({ idToDelete: '', nameToDelete: '' })
	}

	showDeletionSuccessMessage() {
		this.setState({ deletionSuccessMessage: 'Unit deleted' })
	}

	render() {
		let successDiv
		let display
		if (this.state.idToDelete === '' && this.state.nameToDelete === '') {
			display = this.state.units.map(unit => {
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
						army_name={unit.army_name}
						showDeletionTile={this.showDeletionTile}
					/>
				)
			})
		} else {
			display =
				<UnitDeletionTile
					key={this.state.idToDelete}
					id={this.state.idToDelete}
					name={this.state.nameToDelete}
					hideDeletionTile={this.hideDeletionTile}
					showDeletionSuccessMessage={this.showDeletionSuccessMessage}
				/>					
		}
		if (this.state.deletionSuccessMessage !== '') {
			successDiv =
				<div className="success-div">
					{this.state.deletionSuccessMessage}
				</div>
		}

		return (
			<div>
				<h2>Units</h2>
				{successDiv}
				{display}
			</div>
		)
	}
}

export default UnitsIndexContainer
