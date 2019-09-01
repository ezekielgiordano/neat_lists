import React, { Component } from 'react'
import ArmyTile from '../components/ArmyTile'
import ArmyDeletionTile from '../components/ArmyDeletionTile'

class ArmiesIndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			armies: [],
			idToDelete: '',
			nameToDelete: '',
			deletionSuccessMessage: ''
		}
		this.showDeletionTile = this.showDeletionTile.bind(this)
		this.hideDeletionTile = this.hideDeletionTile.bind(this)
		this.showDeletionSuccessMessage = this.showDeletionSuccessMessage.bind(this)
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

	showDeletionTile(id, name) {
		this.setState({ idToDelete: id, nameToDelete: name })
	}

	hideDeletionTile() {
		this.setState({ idToDelete: '', nameToDelete: '' })
	}

	showDeletionSuccessMessage() {
		this.setState({ deletionSuccessMessage: 'Army deleted' })
	}

	render() {
		let successDiv
		let display
		if (this.state.idToDelete === '' && this.state.nameToDelete === '') {
			display = this.state.armies.map(army => {
				return (
					<ArmyTile
						key={army.id}
						id={army.id}
						name={army.name}
						alignment={army.alignment}
						showDeletionTile={this.showDeletionTile}
					/>
				)
			})
		} else {
			display =
				<ArmyDeletionTile
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
				<h2>Armies</h2>
				{successDiv}
				{display}
			</div>
		)
	}
}

export default ArmiesIndexContainer
