import React from 'react'

const ArmyTile = props => {
	return(
		<div className="article-tile">
			{props.name} - {props.alignment}
		</div>
	)
}

export default ArmyTile