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

	renderList = () => {
		return (
			<div>
				Rendering list ... 
			</div>
		)
	}

	renderEdit = () => {
		return (
			<div>
				Rendering edit help item ...
			</div>
		)
	}

	renderNew = () => {
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
					this.state.mode.list ? this.renderList() : 
						this.state.mode.edit ? this.renderEdit() : 
							this.state.mode.new ? this.renderNew() : null
				}
			</div>
		)
	}
}

export default Helppage
