import React, { Component } from 'react'
import { Icon } from 'odeum-ui'

export default class DropdownOption extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showOptions: false
		}
	}
	handleMouseLeave = (e) => {
		// console.log(e)
		this.setState({ showOptions: false })
	}
	onMouseHover = (e) => {
		// console.log(e)
		this.setState({ showOptions: true })
	}
	render() {
		const { showOptions } = this.state
		const { icon, label } = this.props
		return (
			<React.Fragment>
				<div onMouseEnter={this.onMouseHover} onMouseLeave={this.handleMouseLeave}
					style={{}} >
					<Icon icon={icon} iconSize={30} style={{ marginRight: "0px" }} /> <label style={{ marginRight: '4px' }}>{label}</label>
					{showOptions === true ? <div style={{ position: 'absolute', display: 'flex', flexFlow: 'column nowrap', zIndex: 2 }}>
						{this.props.children}

					</div>
						: null
					}
				</div>
			</React.Fragment>
		)
	}
}
