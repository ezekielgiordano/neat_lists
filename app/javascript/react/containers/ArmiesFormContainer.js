import React, { Component } from 'react'
import ArmyNameField from '../components/ArmyNameField'
import ArmyAlignmentField from '../components/ArmyAlignmentField'

class ArmiesFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			armyName: '',
			armyAlignment: '',
			errors: {}
		}
		this.validateName = this.validateName.bind(this)
		this.validateAlignment = this.validateAlignment.bind(this)
		this.updateName = this.updateName.bind(this)
		this.updateAlignment = this.updateAlignment.bind(this)
		this.clearForm = this.clearForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	validateName(input) {
		if(input.trim() === '') {
			let newError = { name: 'You must enter a name' }
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			let errorState = this.state.errors
			delete errorState.armyName
			this.setState({
				errors: errorState
			})
			return true
		}
	}

	validateAlignment(input) {
		if(input.trim() === '') {
			let newError = { alignment: 'You must enter an alignment' }
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			let errorState = this.state.errors
			delete errorState.armyAlignment
			this.setState({
				errors: errorState
			})
			return true
		}
	}

	updateName(event) {
		this.validateName(event.target.value)
		this.setState({
			armyName: event.target.value
		})
	}

	updateAlignment(event) {
		this.validateAlignment(event.target.value)
		this.setState({
			armyAlignment: event.target.value
		})
	}

	clearForm(event) {
		event.preventDefault()
		this.setState({
			armyName: '',
			armyAlignment: '',
			errors: {}
		})
	}

	submitForm(event) {
		event.preventDefault()
		
		let newArmy = {
			name: this.state.armyName,
			alignment: this.state.armyAlignment
		}
		this.props.addArmy(newArmy)
		this.clearForm(event)
	}

	render() {
		let errorDiv
		let errorItems
		if (Object.keys(this.state.errors).length > 0) {
			errorItems = Object.values(this.state.errors).map(error => {
				return(<li key={error}>{error}</li>)
			})
			errorDiv = <div>{errorItems}</div>
		}

		return(
			<form onSubmit={this.submitForm}>
				{errorDiv}
				<ArmyNameField
					content={this.state.armyName}
					label="Army Name"
					name="army-name"
					handlerFunction={this.updateName}
				/><br />
				<ArmyAlignmentField
					content={this.state.armyAlignment}
					label="Alignment"
					name="army-alignment"
					handlerFunction={this.updateAlignment}
				/>

				<div>
					<button onClick={this.clearForm}>Clear</button>
					<input type="submit" value ="Add" />
				</div>
			</form>
		)
	}
}

export default ArmiesFormContainer