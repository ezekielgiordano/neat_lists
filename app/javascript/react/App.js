import React, { Component } from 'react'
import AdminSectionContainer from './containers/AdminSectionContainer'
import NonAdminSectionContainer from './containers/NonAdminSectionContainer'
import UsersFormContainer from './containers/UsersFormContainer'
import UserUpdateFormContainer from './containers/UserUpdateFormContainer'
import SessionsFormContainer from './containers/SessionsFormContainer'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			userFormDisplay: 'signInForm',
			mainDisplay: ''
		}
		this.showSignUpForm = this.showSignUpForm.bind(this)
		this.showSignInForm = this.showSignInForm.bind(this)
		this.showAccountSettingsForm = this.showAccountSettingsForm.bind(this)
	}

	showSignUpForm() {
		this.setState({ userFormDisplay: 'signUpForm' })
	}

	showSignInForm() {
		this.setState({ userFormDisplay: 'signInForm' })
	}

	showAccountSettingsForm() {
		this.setState({ userFormDisplay: 'accountSettingsForm' })
	}

	render() {
		let accountAndSessionDisplay
		if (this.state.user === '') {
			accountAndSessionDisplay =
				<div className="navigation-bar">
					<span onClick={this.showSignInForm} className="navigation-link">
						Sign In
					</span>
					<span onClick={this.showSignUpForm} className="navigation-link">
						Sign Up
					</span>
				</div>
		} else {
			accountAndSessionDisplay =
				<div className="navigation-bar">
					<span className="navigation-link">
						Sign Out
					</span>
					<span onClick={this.showAccountSettingsForm} className="navigation-link">
						Update Account Information
					</span>
				</div>
		}

		let userFormDisplay
		if (this.state.userFormDisplay === 'signUpForm') {
			userFormDisplay =
				<div className="display-box">
					<UsersFormContainer />
				</div>
		}
		if (this.state.userFormDisplay === 'signInForm') {
			userFormDisplay =
				<div className="display-box">
					<SessionsFormContainer />
				</div>
		}
		if (this.state.userFormDisplay === 'accountSettingsForm') {
			userFormDisplay =
				<div className="display-box">
					<UserUpdateFormContainer 
						key={this.state.user.id}
						id={this.state.user.id}
						username={this.state.user.username}
						role={this.state.user.role}
					/>
				</div>
		}		

		let mainDisplay
		if (this.state.mainDisplay === '') {
			mainDisplay =
				<div>				
					<AdminSectionContainer />
					<NonAdminSectionContainer />
				</div>
		}

		return (
			<div>
				{accountAndSessionDisplay}<br />
				{userFormDisplay}
				{mainDisplay}
			</div>
		)
	}
}

export default App