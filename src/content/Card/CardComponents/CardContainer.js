import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CardContainer extends Component {
	getChildContext() {
		return { color: "purple" }
	}

	handleExpand = () => {
		console.log('Hi')
	}
	render() {
		console.log(this.props.children, this.context)
		return (
			<div style={{ position: 'relative', flex: '1', display: 'flex', flexFlow: 'column' }}>
				{this.props.children}
			</div>
		)
	}
}

CardContainer.childContextTypes = {
	handleExpand: PropTypes.func,
	color: PropTypes.string
}