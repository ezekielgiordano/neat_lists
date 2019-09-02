import React, { Component } from 'react'
import ArmiesIndexContainer from './ArmiesIndexContainer'
import ArmiesFormContainer from './ArmiesFormContainer'
import ArmyUpdateFormContainer from './ArmyUpdateFormContainer'
import UnitsIndexContainer from './UnitsIndexContainer'
import UnitsFormContainer from './UnitsFormContainer'
import UnitUpdateFormContainer from './UnitUpdateFormContainer'
import UsersIndexContainer from './UsersIndexContainer'

class AdminSectionContainer extends Component {
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
		this.showUsersIndexContainer = this.showUsersIndexContainer.bind(this)
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

	showUsersIndexContainer() {
		this.setState({ display: 'usersIndexContainer' })
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
		if (this.state.display === 'usersIndexContainer') {
			display = <UsersIndexContainer />
		}

		return (
			<div>
				<div className="navigation-bar">
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
					<span onClick={this.showUsersIndexContainer} className="navigation-link">
						All Users
					</span>
				</div><br />
				<div className="display-box">{display}</div>
			</div>
		)
	}
}

export default AdminSectionContainer