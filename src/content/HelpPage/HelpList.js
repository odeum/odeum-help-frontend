import React, { Component } from 'react'
import { Button } from 'odeum-ui'
import HelpData from '../HelpForm/HelpData'

class HelpList extends Component {
	render() {
		return (
			<div classname="HelpList">
				<h1>Help items list</h1>
				<HelpData helpitems="test"></HelpData>
				<Button
					label={'Create New'}
					onClick={this.props.handleNew}
				/>
			</div>
		)
	}
}

export default HelpList