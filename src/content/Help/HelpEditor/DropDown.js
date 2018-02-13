import React, { Component } from 'react'
import { Icon } from 'odeum-ui'
import { DropdownButton } from './HelpEditorStyles'

export default class DropdownOption extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showOptions: false
		}
	}
	handleMouseLeave = (e) => {
		this.setState({ showOptions: false })
	}
	onMouseHover = (e) => {
		this.setState({ showOptions: true })
	}
	render() {
		const { showOptions } = this.state
		const { icon, label } = this.props
		return (
			<DropdownButton onMouseEnter={this.onMouseHover} onMouseLeave={this.handleMouseLeave}
			>
				<div style={{ display: 'flex', alignItems: 'center' }}><Icon icon={icon} iconSize={30} active={true} color={'#fff'} style={{ marginRight: "0px" }} /> <label style={{ marginRight: '4px' }}>{label}</label></div>
				{showOptions === true ? <div style={{ position: 'absolute', display: 'flex', flexFlow: 'column nowrap', zIndex: 2, borderRadius: '4px', overflow: 'hidden' }}>
					{this.props.children}

				</div>
					: null
				}
			</DropdownButton>
		)
	}
}
