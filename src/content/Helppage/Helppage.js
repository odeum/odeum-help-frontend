import React, { Component } from 'react'

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

	renderHelpFormList = () => {
		return (
			<div>
				Rendering list ... 
			</div>
		)
	}

	renderHelpFormEdit = () => {
		return (
			<div>
				Rendering edit help item ...
			</div>
		)
	}

	renderHelpFormNew = () => {
		return (
			<div>
				Rendering new help item
			</div>
		)
	}


	render() {
		return (
			<div>
				{
					this.state.mode.list ? this.renderHelpFormList() : 
						this.state.mode.edit ? this.renderHelpFormEdit() : 
							this.state.mode.new ? this.renderHelpFormNew() : null
				}
			</div>
		)
	}
}

export default Helppage
