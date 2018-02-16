import { ChromePicker } from 'react-color'
import Dropdown from '../DropDown'

import React, { Component } from 'react'

export default class ColorPicker extends Component {
	constructor(props) {
		super(props)

		this.state = {
			colorPicked: '#000000'
		}
	}
	handleColorPick = (color) => {
		this.setState({ colorPicked: color.hex })
		this.props.toggleColor(color.hex)
	}
	render() {
		return (
			<Dropdown icon={'format_quote'} label={'Color'} style={{ backgroundColor: this.state.colorPicked }}>
				<ChromePicker
					color={this.state.colorPicked}
					onChangeComplete={this.handleColorPick} />
			</Dropdown>
		)
	}
}
