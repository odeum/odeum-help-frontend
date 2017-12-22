import React, { Component } from 'react'

class Protected extends Component {
	render() {
		console.log('Protected area ... ')
		return (
			<div>
				{this.props.isLoggedIn && this.props.children}
			</div>
		)
	}
}

export default Protected