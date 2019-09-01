import React, { Component } from 'react'

class UnitTile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.id,
			name: this.props.name
		}
		this.deleteFromDatabase = this.deleteFromDatabase.bind(this)
	}

	deleteFromDatabase() {
		if (window.confirm(`Are you sure you want to delete "${this.state.name}"?`)) {
			fetch(`/api/v1/units/${this.state.id}`, {
				method: 'DELETE',
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
			.catch(error => console.error(`Error in fetch: ${error.message}`))
		}
	}	

	render() {
		return (
			<div className="unit-tile">
				<i
					className="delete-x"
					onClick={this.deleteFromDatabase}
				>
					X
				</i>
				{this.props.name}{' '}------{' '}
				{this.props.unitSize},{' '}
				ust{this.props.unitStrength},{' '}
				sp{this.props.speed},{' '}
				me{this.props.melee},{' '}
				ra{this.props.ranged},{' '}
				de{this.props.defense},{' '}
				a{this.props.attacks},{' '}
				{this.props.points}{' '}points,{' '}
				{this.props.special}{' '}------{' '}
				Army:{' '}{this.props.army}
			</div>
		)
	}
}

export default UnitTile