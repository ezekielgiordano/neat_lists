import React from 'react'
import ArmiesIndexContainer from './containers/ArmiesIndexContainer'
import ArmiesFormContainer from './containers/ArmiesFormContainer'
import ArmyUpdateFormContainer from './containers/ArmyUpdateFormContainer'
import UnitsIndexContainer from './containers/UnitsIndexContainer'
import UnitsFormContainer from './containers/UnitsFormContainer'
import UnitUpdateFormContainer from './containers/UnitUpdateFormContainer'

const App = () => {
	return (
		<div>
			<ArmiesIndexContainer />
			<ArmiesFormContainer />
			<ArmyUpdateFormContainer />
			<UnitsIndexContainer />
			<UnitsFormContainer />
			<UnitUpdateFormContainer />
		</div>
	)
}

export default App