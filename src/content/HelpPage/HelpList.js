import React, { Component } from 'react'
import { Button } from 'odeum-ui'
import { getAllHelpItems } from '../HelpForm/HelpData'
import { TD, TR, TH, Table } from '../HelpForm/HelpStyles'
class HelpList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			helpItems: []
		}
	}

	componentWillMount = async () => {
		var data = await getAllHelpItems()
		console.log(data)
		this.setState({ helpItems: data })

	}

	render() {
		return (
			<div >
				<h1>Help items list</h1>
				<Table>
					<TH>
						<TD>Title</TD>
						<TD>Description</TD>
					</TH>
					{this.state.helpItems.map((child, index) => {
						// console.log(child)
						return <TR key={index}>
							<TD>
								{child.locale_content.da.help_title}
							</TD>
							<TD>
								{child.locale_content.da.help_description}
							</TD>
						</TR>
					}
					)}
				</Table>

				<Button
					label={'Create New'}
					onClick={this.props.handleNew}
				/>
			</div>
		)
	}
}

export default HelpList