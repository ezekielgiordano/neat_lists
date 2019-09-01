import React, { Component } from 'react'

class UnitDeletionTile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.id,
			name: this.props.name
		}
		this.deleteFromDatabase = this.deleteFromDatabase.bind(this)
	}

	deleteFromDatabase() {
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
		this.props.hideDeletionTile()
		this.props.showDeletionSuccessMessage()
	}	

	render() {
		return (
			<div>
				<p>Are you sure you want to delete "{this.state.name}"?</p>
				<button onClick={this.props.hideDeletionTile}>Cancel</button>
				<button onClick={this.deleteFromDatabase}>Delete</button>
			</div>
		)
	}
}

export default UnitDeletionTile