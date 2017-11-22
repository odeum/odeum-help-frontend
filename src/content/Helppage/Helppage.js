import React, { Component } from 'react'

import HelpFormEdit from '../HelpForm/HelpFormEdit'
import HelpFormNew from '../HelpForm/HelpFormNew'
import HelpList from './HelpList'

class Helppage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			mode: {
				list: false,
				new: false,
				edit: false
			},

			helpItems: []
		}

	}

	componentDidMount() {
		this.setState({ mode: { new: true } })
	}

	renderHelpList = () => {
		return (
			<div>
				<HelpList />				
			</div>
		)
	}

	renderHelpFormEdit = () => {
		return (
			<div>
				<HelpFormEdit />				
			</div>
		)
	}

	renderHelpFormNew = () => {
		return (
			<div>
				<HelpFormNew />				
			</div>
		)
	}


	render() {
		return (
			<div>
				{
					this.state.mode.list ? this.renderHelpList() : 
						this.state.mode.edit ? this.renderHelpFormEdit() : 
							this.state.mode.new ? this.renderHelpFormNew() : null
				}
			</div>
		)
	}
}

export default Helppage
