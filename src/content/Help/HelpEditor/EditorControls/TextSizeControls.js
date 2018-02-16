import React, { Component } from 'react'

export default class TextSizeControls extends Component {
	constructor(props) {
		super(props)

		this.state = {
			size: 15
		}
	}
	toggleSize = (e) => {
		this.setState({ size: e.target.value })
	
	}
	handleBlur = () => {
		this.props.toggleSize(this.state.size + 'px')
	}
	render() {
		return (
			<div>
				<input placeholder="Size" onBlur={this.handleBlur} onChange={this.toggleSize} value={this.state.size} style={{ margin: '4px', width: '30px' }} />
			</div>
		)
	}
}
