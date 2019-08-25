import React, { Component } from 'react'
import ArmyNameField from '../components/ArmyNameField'
import ArmyAlignmentDropdown from '../components/ArmyAlignmentDropdown'

class ArmiesFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			armyName: '',
			armyAlignment: '',
			alignmentOptions: ['Good', 'Evil', 'Neutral'],
			errors: {}
		}
		this.validateName = this.validateName.bind(this)
		this.validateAlignment = this.validateAlignment.bind(this)
		this.updateName = this.updateName.bind(this)
		this.updateAlignment = this.updateAlignment.bind(this)
		this.clearForm = this.clearForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	clearNameErrors(event) {
		let errorState = this.state.errors
		delete errorState.armyName
		this.setState({
			errors: errorState
		})
	}

	clearAlignmentErrors(event) {
		let errorState = this.state.errors
		delete errorState.armyAlignment
		this.setState({
			errors: errorState
		})
	}

	validateName(input) {
		if (input.trim() === '') {
			let newError = {
				armyName: 'You must enter a name'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearNameErrors()
			return true
		}
	}

	validateAlignment(input) {
		if (input.trim() === '') {
			let newError = {
				armyAlignment: 'You must select an alignment'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearAlignmentErrors()
			return true
		}
	}

	updateName(event) {
		this.setState({
			armyName: event.target.value
		})
		if (
			this.state.armyName.trim() !== '' ||
			this.state.armyName.length > 0
		) {
			this.clearNameErrors()
		}
	}

	updateAlignment(event) {
		this.clearAlignmentErrors()
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
		let dataToAdd = {
			name: '',
			alignment: ''
		}				
		if (this.validateName(this.state.armyName)) {
			dataToAdd.name = this.state.armyName
		}
		if (this.validateAlignment(this.state.armyAlignment)) {
			dataToAdd.alignment = this.state.armyAlignment
		}
		if (dataToAdd.name != '' && dataToAdd.alignment != '') {
			this.props.addToDatabase(dataToAdd)
			this.clearForm(event)
		}
	}

	render() {
		let errorDiv
		let errorItems
		if (Object.keys(this.state.errors).length > 0) {
			errorItems = Object.values(this.state.errors).map(error => {
				return (<li key={error}>{error}</li>)
			})
			errorDiv = <div className="error-div">{errorItems}</div>
		}

		return (
			<form onSubmit={this.submitForm}>
				<h3>Add New Army</h3>
				{errorDiv}
				<div className="army-name-field">
					<ArmyNameField
						content={this.state.armyName}
						label="Army Name:"
						name="army-name"
						handlerFunction={this.updateName}
					/>
				</div>
				<div className="army-alignment-field">
					<ArmyAlignmentDropdown
						options={this.state.alignmentOptions}
						selection={this.state.armyAlignment}
						label="Alignment:"
						name="army-alignment"
						handlerFunction={this.updateAlignment}
					/>
				</div>

				<div className="button-group">
					<button onClick={this.clearForm}>Clear</button>
					<input type="submit" value="Add" />
				</div>
			</form>
		)
	}
}

export default ArmiesFormContainer