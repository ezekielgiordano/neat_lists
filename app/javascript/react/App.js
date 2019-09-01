import React, { Component } from 'react'
import ArmiesIndexContainer from './containers/ArmiesIndexContainer'
import ArmiesFormContainer from './containers/ArmiesFormContainer'
import ArmyUpdateFormContainer from './containers/ArmyUpdateFormContainer'
import UnitsIndexContainer from './containers/UnitsIndexContainer'
import UnitsFormContainer from './containers/UnitsFormContainer'
import UnitUpdateFormContainer from './containers/UnitUpdateFormContainer'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			display: 'unitsIndexContainer'
		}
		this.showArmiesIndexContainer = this.showArmiesIndexContainer.bind(this)
		this.showArmiesFormContainer = this.showArmiesFormContainer.bind(this)
		this.showArmyUpdateFormContainer = this.showArmyUpdateFormContainer.bind(this)
		this.showUnitsIndexContainer = this.showUnitsIndexContainer.bind(this)
		this.showUnitsFormContainer = this.showUnitsFormContainer.bind(this)
		this.showUnitUpdateFormContainer = this.showUnitUpdateFormContainer.bind(this)
	}

	showArmiesIndexContainer() {
		this.setState({ display: 'armiesIndexContainer' })
	}

	showArmiesFormContainer() {
		this.setState({ display: 'armiesFormContainer' })
	}

	showArmyUpdateFormContainer() {
		this.setState({ display: 'armyUpdateFormContainer' })
	}

	showUnitsIndexContainer() {
		this.setState({ display: 'unitsIndexContainer' })
	}

	showUnitsFormContainer() {
		this.setState({ display: 'unitsFormContainer' })
	}

	showUnitUpdateFormContainer() {
		this.setState({ display: 'unitUpdateFormContainer' })
	}

	render() {
		let display	
		if (this.state.display === 'armiesIndexContainer') {
			display = <ArmiesIndexContainer />
		}
		if (this.state.display === 'armiesFormContainer') {
			display = <ArmiesFormContainer />
		}
		if (this.state.display === 'armyUpdateFormContainer') {
			display = <ArmyUpdateFormContainer />
		}
		if (this.state.display === 'unitsIndexContainer') {
			display = <UnitsIndexContainer />
		}
		if (this.state.display === 'unitsFormContainer') {
			display = <UnitsFormContainer />
		}
		if (this.state.display === 'unitUpdateFormContainer') {
			display = <UnitUpdateFormContainer />
		}

		return (
			<div>
				<div className="admin-bar">
					<span onClick={this.showArmiesIndexContainer} className="navigation-link">
						All Armies
					</span>
					<span onClick={this.showArmiesFormContainer} className="navigation-link">
						Add Army
					</span>
					<span onClick={this.showArmyUpdateFormContainer} className="navigation-link">
						Update Army
					</span>
					<span onClick={this.showUnitsIndexContainer} className="navigation-link">
						All Units
					</span>
					<span onClick={this.showUnitsFormContainer} className="navigation-link">
						Add Unit
					</span>
					<span onClick={this.showUnitUpdateFormContainer} className="navigation-link">
						Update Unit
					</span>
				</div><br />
				<div className="admin-section-display">{display}</div>
			</div>
		)
	}
}

export default App