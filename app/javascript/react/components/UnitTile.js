import React from 'react'

const UnitTile = props => {	
	return (
		<div className="unit-tile">
			<span
				className="delete-x"
				onClick={() => props.showDeletionTile(props.id, props.name)}
			>
				X
			</span>
			<span>
				{props.name}{' '}------{' '}
				{props.unitSize},{' '}
				ust{props.unitStrength},{' '}
				sp{props.speed},{' '}
				me{props.melee},{' '}
				ra{props.ranged},{' '}
				de{props.defense},{' '}
				a{props.attacks},{' '}
				{props.points}{' '}points,{' '}
				{props.special}{' '}------{' '}
				Army:{' '}{props.army_name}
			</span>
		</div>
	)
}

export default UnitTile