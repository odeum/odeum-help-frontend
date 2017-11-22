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
		this.setState({ mode: { list: true } })
	}

	// Section: List items and accept new and edit

	handleNew = () => {
		this.setState({ mode: { new: true, list: false, edit: false } })
	}

	handleEdit = () => {
		this.setState({ mode: { new: false, list: false, edit: true } })
	}

	renderHelpList = () => {
		return (
			<div>
				<HelpList 
					handleNew={this.handleNew} 
					handleEdit={this.handleEdit}
				/>
			</div>
		)
	}

	// Section: Edit help item 
	handleOnSubmitEdit = () => {
		this.setState({ mode: { new: false, list: true } })
	}
	
	renderHelpFormEdit = () => {
		return (
			<div>
				<HelpFormEdit
					onSubmit={this.handleOnSubmitEdit}
				/>
			</div>
		)
	}

	// Section: New help item 
	handleOnSubmitNew = () => {
		this.setState({ mode: { new: false, list: true } })
	}

	renderHelpFormNew = () => {
		return (
			<div>
				<HelpFormNew 
					onSubmit={this.handleOnSubmitNew} 
				/>
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
