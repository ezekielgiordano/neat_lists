import React, { Component } from 'react'
import UnitNameDropdown from '../components/UnitNameDropdown'
import UnitNameField from '../components/UnitNameField'
import UnitSizeField from '../components/UnitSizeField'
import UnitStrengthField from '../components/UnitStrengthField'
import UnitSpeedField from '../components/UnitSpeedField'
import UnitMeleeField from '../components/UnitMeleeField'
import UnitRangedField from '../components/UnitRangedField'
import UnitDefenseField from '../components/UnitDefenseField'
import UnitAttacksField from '../components/UnitAttacksField'
import UnitPointsField from '../components/UnitPointsField'
import UnitSpecialField from '../components/UnitSpecialField'

class UnitUpdateFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			units: [],
			selectedUnit: '',
			name: '',
			unitSize: '',
			unitStrength: '',
			speed: '',
			melee: '',
			ranged: '',
			defense: '',
			attacks: '',
			points: '',
			special: '',
			errors: {},
			successMessage: ''
		}
		this.updateUnit = this.updateUnit.bind(this)
		this.clearSelectedUnitErrors = this.clearSelectedUnitErrors.bind(this)
		this.clearNameErrors = this.clearNameErrors.bind(this)
		this.clearUnitSizeErrors = this.clearUnitSizeErrors.bind(this)
		this.clearUnitStrengthErrors = this.clearUnitStrengthErrors.bind(this)
		this.clearSpeedErrors = this.clearSpeedErrors.bind(this)
		this.clearMeleeErrors = this.clearMeleeErrors.bind(this)
		this.clearRangedErrors = this.clearRangedErrors.bind(this)
		this.clearDefenseErrors = this.clearDefenseErrors.bind(this)
		this.clearAttacksErrors = this.clearAttacksErrors.bind(this)
		this.clearPointsErrors = this.clearPointsErrors.bind(this)
		this.clearSpecialErrors = this.clearSpecialErrors.bind(this)
		this.validateSelectedUnit = this.validateSelectedUnit.bind(this)
		this.validateName = this.validateName.bind(this)
		this.validateUnitSize = this.validateUnitSize.bind(this)
		this.validateUnitStrength = this.validateSpeed.bind(this)
		this.validateSpeed = this.validateSpeed.bind(this)
		this.validateMelee = this.validateMelee.bind(this)
		this.validateRanged = this.validateRanged.bind(this)
		this.validateDefense = this.validateDefense.bind(this)
		this.validateAttacks = this.validateAttacks.bind(this)
		this.validatePoints = this.validatePoints.bind(this)
		this.validateSpecial = this.validateSpecial.bind(this)
		this.updateSelectedUnit = this.updateSelectedUnit.bind(this)
		this.updateName = this.updateName.bind(this)
		this.updateUnitSize = this.updateUnitSize.bind(this)
		this.updateUnitStrength = this.updateUnitStrength.bind(this)
		this.updateSpeed = this.updateSpeed.bind(this)
		this.updateMelee = this.updateMelee.bind(this)
		this.updateRanged = this.updateRanged.bind(this)
		this.updateDefense = this.updateDefense.bind(this)
		this.updateAttacks = this.updateAttacks.bind(this)
		this.updatePoints = this.updatePoints.bind(this)
		this.updateSpecial = this.updateSpecial.bind(this)
		this.clearForm = this.clearForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
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

	updateUnit(dataToAdd, id) {
		fetch(`/api/v1/units/${id}`, {
			method: 'PUT',
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
			this.setState ({ successMessage: 'Unit updated' })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

    clearSelectedUnitErrors(event) {
		let errorState = this.state.errors
		delete errorState.selectedUnit
		this.setState({ errors: errorState })
	}

	clearNameErrors(event) {
		let errorState = this.state.errors
		delete errorState.name
		this.setState({ errors: errorState })
	}

	clearUnitSizeErrors(event) {
		let errorState = this.state.errors
		delete errorState.unitSize
		this.setState({ errors: errorState })
	}

	clearUnitStrengthErrors(event) {
		let errorState = this.state.errors
		delete errorState.unitStrength
		this.setState({ errors: errorState })
	}

	clearSpeedErrors(event) {
		let errorState = this.state.errors
		delete errorState.speed
		this.setState({ errors: errorState })
	}

	clearMeleeErrors(event) {
		let errorState = this.state.errors
		delete errorState.melee
		this.setState({ errors: errorState })
	}

	clearRangedErrors(event) {
		let errorState = this.state.errors
		delete errorState.ranged
		this.setState({ errors: errorState })
	}

	clearDefenseErrors(event) {
		let errorState = this.state.errors
		delete errorState.defense
		this.setState({ errors: errorState })
	}

	clearAttacksErrors(event) {
		let errorState = this.state.errors
		delete errorState.attacks
		this.setState({ errors: errorState })
	}

	clearPointsErrors(event) {
		let errorState = this.state.errors
		delete errorState.points
		this.setState({ errors: errorState })
	}

	clearSpecialErrors(event) {
		let errorState = this.state.errors
		delete errorState.special
		this.setState({ errors: errorState })
	}

	validateSelectedUnit(input) {
		if (input === '' || input === {}) {
			let newError = {
				selectedUnit: 'You must select a unit to update'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearSelectedUnitErrors()
			return true
		}
	}

	validateName(input) {
		if (input.trim() === '') {
			let newError = {
				name: 'You must enter a name'
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

	validateUnitSize(input) {
		if (input.trim() === '') {
			let newError = {
				unitSize: 'You must enter a Unit Size value'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearUnitSizeErrors()
			return true
		}
	}

	validateUnitStrength(input) {
		if (input.trim() === '') {
			let newError = {
				unitStrength: 'You must enter a Unit Strength value'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearUnitStrengthErrors()
			return true
		}
	}

	validateSpeed(input) {
		if (input.trim() === '') {
			let newError = {
				speed: 'You must enter a Speed value'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearSpeedErrors()
			return true
		}
	}

	validateMelee(input) {
		if (input.trim() === '') {
			let newError = {
				melee: 'You must enter a Melee value'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearMeleeErrors()
			return true
		}
	}

	validateRanged(input) {
		if (input.trim() === '') {
			let newError = {
				ranged: 'You must enter a Ranged value'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearRangedErrors()
			return true
		}
	}

	validateDefense(input) {
		if (input.trim() === '') {
			let newError = {
				defense: 'You must enter a Defense value'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearDefenseErrors()
			return true
		}
	}

	validateAttacks(input) {
		if (input.trim() === '') {
			let newError = {
				attacks: 'You must enter an Attacks value'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearAttacksErrors()
			return true
		}
	}

	validatePoints(input) {
		if (input.trim() === '') {
			let newError = {
				points: 'You must enter a point value'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else if (!Number.isInteger(parseInt(input))) {
			let newError = {
				points: 'The point value must be a number'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearPointsErrors()
			return true
		}
	}

	validateSpecial(input) {
		if (input.trim() === '') {
			let newError = {
				special: 'At least put something in the Special box so it looks better'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearSpecialErrors()
			return true
		}
	}

	updateSelectedUnit(event) {
		this.clearSelectedUnitErrors()
		this.setState({ selectedUnit: event.target.value })
	}

	updateName(event) {
		this.setState({ name: event.target.value })
		if (
			this.state.name.trim() !== '' ||
			this.state.name.length > 0
		) {
			this.clearNameErrors()
		}
	}

	updateUnitSize(event) {
		this.clearUnitSizeErrors()
		this.setState({ unitSize: event.target.value })
	}

	updateUnitStrength(event) {
		this.setState({ unitStrength: event.target.value })
		if (
			this.state.unitStrength.trim() !== '' ||
			this.state.unitStrength.length > 0
		) {
			this.clearUnitStrengthErrors()
		}
	}

	updateSpeed(event) {
		this.setState({ speed: event.target.value })
		if (
			this.state.speed.trim() !== '' ||
			this.state.speed.length > 0
		) {
			this.clearSpeedErrors()
		}
	}

	updateMelee(event) {
		this.setState({ melee: event.target.value })
		if (
			this.state.melee.trim() !== '' ||
			this.state.melee.length > 0
		) {
			this.clearMeleeErrors()
		}
	}

	updateRanged(event) {
		this.setState({ ranged: event.target.value })
		if (
			this.state.ranged.trim() !== '' ||
			this.state.ranged.length > 0
		) {
			this.clearRangedErrors()
		}
	}

	updateDefense(event) {
		this.setState({ defense: event.target.value })
		if (
			this.state.ranged.trim() !== '' ||
			this.state.ranged.length > 0
		) {
			this.clearDefenseErrors()
		}
	}

	updateAttacks(event) {
		this.setState({ attacks: event.target.value })
		if (
			this.state.ranged.trim() !== '' ||
			this.state.ranged.length > 0
		) {
			this.clearAttacksErrors()
		}
	}

	updatePoints(event) {
		this.setState({ points: event.target.value })
		if (
			this.state.points.trim() !== '' ||
			this.state.points.length > 0
		) {
			this.clearPointsErrors()
		}
	}

	updateSpecial(event) {
		this.setState({ special: event.target.value })
		if (
			this.state.special.trim() !== '' ||
			this.state.special.length > 0
		) {
			this.clearSpecialErrors()
		}
	}

	clearForm(event) {
		event.preventDefault()
		this.setState({
			selectedUnit: '',
			name: '',
			unitSize: '',
			unitStrength: '',
			speed: '',
			melee: '',
			ranged: '',
			defense: '',
			attacks: '',
			points: '',
			special: '',
			errors: {},
			successMessage: ''
		})
	}

	submitForm(event) {
		event.preventDefault()
		let dataToAdd = {
			name: '',
			unit_size: '',
			unit_strength: '',
			speed: '',
			melee: '',
			ranged: '',
			defense: '',
			attacks: '',
			points: '',
			special: ''
		}
		let id = ''
		if (this.validateSelectedUnit(this.state.selectedUnit)) {
			id = this.state.selectedUnit
		}
		if (this.validateName(this.state.name)) {
			dataToAdd.name = this.state.name
		}
		if (this.validateUnitSize(this.state.unitSize)) {
			dataToAdd.unit_size = this.state.unitSize
		}
		if (this.validateUnitStrength(this.state.unitStrength)) {
			dataToAdd.unit_strength = this.state.unitStrength
		}
		if (this.validateSpeed(this.state.speed)) {
			dataToAdd.speed = this.state.speed
		}
		if (this.validateMelee(this.state.melee)) {
			dataToAdd.melee = this.state.melee
		}
		if (this.validateRanged(this.state.ranged)) {
			dataToAdd.ranged = this.state.ranged
		}
		if (this.validateDefense(this.state.defense)) {
			dataToAdd.defense = this.state.defense
		}
		if (this.validateAttacks(this.state.attacks)) {
			dataToAdd.attacks = this.state.attacks
		}
		if (this.validatePoints(this.state.points)) {
			dataToAdd.points = parseInt(this.state.points)
		}
		if (this.validateSpecial(this.state.special)) {
			dataToAdd.special = this.state.special
		}	
		if (
			id != '' &&
			dataToAdd.name != '' &&
			dataToAdd.unit_size != '' &&
			dataToAdd.unit_strength != '' &&
			dataToAdd.speed != '' &&
			dataToAdd.melee != '' &&
			dataToAdd.ranged != '' &&
			dataToAdd.defense != '' &&
			dataToAdd.attacks != '' &&
			dataToAdd.points != '' &&
			dataToAdd.special != ''
		) {
			this.updateUnit(dataToAdd, id)
			this.clearForm(event)
		}
	}

	render() {
		let errorDiv
		let successDiv
		let errorItems
		if (Object.keys(this.state.errors).length > 0) {
			errorItems = Object.values(this.state.errors).map(error => {
				return (<li key={error}>{error}</li>)
			})
			errorDiv = <div className="error-div">{errorItems}</div>
		}
		if (this.state.successMessage != '' && errorItems == null) {
			successDiv = <div className="success-div">{this.state.successMessage}</div>
		}

		return (
			<div className="form-container">
				<form onSubmit={this.submitForm}>
					<h2>Update Unit</h2>
					{errorDiv}
					{successDiv}
					<div className="unit-name-dropdown">
						<UnitNameDropdown
							options={this.state.units}
							selection={this.state.selectedUnit}
							label="Unit:"
							name="selectedUnit"
							handlerFunction={this.updateSelectedUnit}
						/>
					</div>
					<div className="unit-name-field">
						<UnitNameField
							content={this.state.name}
							label="Name:"
							name="name"
							handlerFunction={this.updateName}
						/>
					</div>
					<div className="unit-size-field">
						<UnitSizeField
							content={this.state.unitSize}
							label="Unit Size:"
							name="unit-size"
							handlerFunction={this.updateUnitSize}
						/>
					</div>
					<div className="unit-strength-field">
						<UnitStrengthField
							content={this.state.unitStrength}
							label="Unit Strength:"
							name="unit-strength"
							handlerFunction={this.updateUnitStrength}
						/>
					</div>
					<div className="unit-speed-field">
						<UnitSpeedField
							content={this.state.speed}
							label="Speed:"
							name="speed"
							handlerFunction={this.updateSpeed}
						/>
					</div>
					<div className="unit-melee-field">
						<UnitMeleeField
							content={this.state.melee}
							label="Melee:"
							name="melee"
							handlerFunction={this.updateMelee}
						/>
					</div>
					<div className="unit-ranged-field">
						<UnitRangedField
							content={this.state.ranged}
							label="Ranged:"
							name="ranged"
							handlerFunction={this.updateRanged}
						/>
					</div>
					<div className="unit-defense-field">
						<UnitDefenseField
							content={this.state.defense}
							label="Defense:"
							name="defense"
							handlerFunction={this.updateDefense}
						/>
					</div>
					<div className="unit-attacks-field">
						<UnitAttacksField
							content={this.state.attacks}
							label="Attacks:"
							name="attacks"
							handlerFunction={this.updateAttacks}
						/>
					</div>
					<div className="unit-points-field">
						<UnitPointsField
							content={this.state.points}
							label="Points:"
							name="points"
							handlerFunction={this.updatePoints}
						/>
					</div>
					<div className="unit-special-field">
						<UnitSpecialField
							content={this.state.special}
							label="Special:"
							name="special"
							handlerFunction={this.updateSpecial}
						/>
					</div>

					<div className="button-group">
						<button onClick={this.clearForm}>Clear Form</button>
						<input type="submit" value="Update" />
					</div>
				</form>
			</div>
		)
	}
}

export default UnitUpdateFormContainer