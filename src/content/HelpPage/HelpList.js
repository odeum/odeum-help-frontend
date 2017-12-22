import React, { Component } from 'react'
import { Button, ButtonPanel } from 'odeum-ui'
import { DoublePanel, InputGreen, Panel } from '../HelpForm/HelpStyles'
import { getAllHelpItems } from '../HelpForm/HelpData'
import { TD, TR, TH, Table } from '../HelpForm/HelpStyles'
class HelpList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			helpItems: [],
			showModal: false,
			openHelp: ''
		}
	}

	openModal = (helpItems) => (e) => {
		this.setState({ showModal: !this.state.showModal, openHelp: helpItems })
	}

	componentWillMount = async () => {
		var data = await getAllHelpItems()
		console.log(data)
		this.setState({ helpItems: data })

	}

	render() {
		return (
			<div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
				<h1>Help items list</h1>
				<Button	label={'Create new'} onClick={this.props.handleNew}/>
				<Button label={'Modal example'} onClick={this.openModal}></Button>{ this.state.showModal ? <div>Text</div> : null }
				<br></br>
				<Table>
					<TH>
						<TR>
							<TD style={{ fontWeight: "bold" }}>Hjælpe titel</TD>
							<TD style={{ fontWeight: "bold" }}>Beskrivelse</TD>
						</TR>
					</TH>
					{this.state.helpItems.reverse().map((child, index) => {
					// console.log(child)
						return <TR key={index}>
							<TD  onClick={this.openModal} >
								{child.locale_content.da.help_title}
							</TD>
							<TD>
								{child.locale_content.da.help_description}
							</TD>
						</TR>
					}
					)}
				</Table>
				<br></br>
				<Table>
					<TR>
						<TD style={{ fontWeight: "bold" }} >Header 1</TD>
						<TD>data</TD>
					</TR>
					<TR>
						<TD style={{ fontWeight: "bold" }} >Header 2</TD>
						<TD>data</TD>
					</TR>
					<TR>
						<TD style={{ fontWeight: "bold" }} >Header 3</TD>
						<TD>data</TD>
					</TR>
				</Table>
			</div>
		)
	}
}


export default HelpList