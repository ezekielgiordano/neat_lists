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

		let links = document.getElementsByClassName('admin-link')
		let i
		for (i = 0; i < links.length; i++) {
			let linkName = links[i].getAttribute('name')
			if (linkName === this.state.display) {
				links[i].classList.add('selected-link')
			} else {
				links[i].classList.remove('selected-link')
			}
		}

		return (
			<div>
				<div className="navigation-bar">
					<span 
						onClick={this.showArmiesIndexContainer}
						name="armiesIndexContainer"
						className="admin-link"
					>
						All Armies
					</span>
					<span
						onClick={this.showArmiesFormContainer}
						name="armiesFormContainer"
						className="admin-link"
					>
						Add Army
					</span>
					<span
						onClick={this.showArmyUpdateFormContainer}
						name="armyUpdateFormContainer"
						className="admin-link"
					>
						Update Army
					</span>
					<span
						onClick={this.showUnitsIndexContainer}
						name="unitsIndexContainer"
						className="admin-link selected-link"
					>
						All Units
					</span>
					<span
						onClick={this.showUnitsFormContainer}
						name="unitsFormContainer"
						className="admin-link"
					>
						Add Unit
					</span>
					<span
						onClick={this.showUnitUpdateFormContainer}
						name="unitUpdateFormContainer"
						className="admin-link"
					>
						Update Unit
					</span>
					<span
						onClick={this.showUsersIndexContainer}
						name="usersIndexContainer"
						className="admin-link"
					>
						All Users
					</span>
				</div><br />

				<div className="display-box">{display}</div>
			</div>
		)
	}
}

export default AdminSectionContainer