import React from 'react'
import IdleState from './IdleState'

export const handleLink = () => {
	return '/'
}



export const RenderFooterLabel = () => {
	const date = new Date()
	return (
		<div>
			<strong>ODEUM Code</strong> v0.2.24 © Copyright
			{' '}{date.getFullYear()}{' '}
			<IdleState />{' '}
		</div>
	)
}
