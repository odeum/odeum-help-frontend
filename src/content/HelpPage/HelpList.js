import React, { Component } from 'react'
import { Button, /* ButtonPanel */ } from 'odeum-ui'
// import { DoublePanel, InputGreen, Panel } from '../HelpForm/HelpStyles'
import { getAllHelpItems } from '../HelpForm/HelpData'
import { TD, TR, TH, Table } from '../HelpForm/HelpStyles'
import HelpModal from '../HelpForm/HelpModal'
import HelpNew from '../HelpForm/HelpNew'
class HelpList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			helpItems: [],
			showModal: false,
			openHelp: ''
		}
	}

	openModal = (helpItem) => (e) => {
		this.setState({ showModal: !this.state.showModal, openHelp: helpItem })
	}

	componentWillMount = async () => {
		var data = await getAllHelpItems()
		console.log(data)
		this.setState({ helpItems: data.reverse() })

	}
	updateHelpItem = async (helpItem) => {
		//Here you call the server to update your helpItem
		//PS: You are still not handling or setting any kind of ID, so the server will not know what or which item to update
		//PS2: you have 2 options:
		// 1. Make a function inside HelpNew , call it helpIdGenerator or whatever and generate an readable id and set it in the state and pass it to the server togheter with locale_content 
		// {help_id: *your_generated_string* , locale_content: {etc.}}
		// 2. Make an input field that gives the user the possibility to fill it itself then set it in the state and pass it to the server togheter with locale_content 
		// {help_id: *your_generated_string* , locale_content: {etc.}}

		// How the function to call the server should look like
		// var callServer = await updateHelpItem(helpItem)
		//where callServer returns true/false/error, updateHelpItem is a function in Data file that calls the server using axios ( PUT function)

		//PS3: Workflow:
		/*  
			1. Start with passing the help_id and store it on the server. (in HelpNew.js)
			2. Work on the server to call http://localhost:port/gethelpitems?help_id="your-id" so that it returns that specific id,
			 *PS4: Now the Table works because I'm taking it from all the helpItems list that you get*
			3. Then make the function on the server so that PUT-ing (HTTP Call) an helpItem to the server on http://localhost:port/updatehelpitem
			will find the item based on its help_id, and update it
			4. Go back to HelpData, make the PUT function inside HelpData ( api.put( etc...) )
			5. Now call it from here 
		*/
	}
	render() {
		// var helpItems = this.state.helpItems.reverse()
		const { helpItems } = this.state
		return (
			<div>
				<h1>Help items list</h1>
				<Button	label={'Create new'} onClick={this.props.handleNew}/>
				<br></br>
				<Table>
					<thead>
						
						<TR>
							<TH colSpan="2">Dansk
							</TH>
							<TH colSpan="2">English
							</TH>
						</TR>
						<TR>
							<TH>Hjælpe titel</TH>
							<TH>Beskrivelse</TH>
							<TH>Help Title</TH>
							<TH>Description</TH>
						</TR>
					</thead>
					
					
					<tbody>
						{helpItems.map((child, index) => {
						// console.log(child)
							return <TR key={index} onClick={this.openModal(child)}>
								<TD>
									{child.locale_content.da.help_title}
								</TD>
								<TD>
									{child.locale_content.da.help_description}
								</TD>
								<TD >
									{child.locale_content.en.help_title}
								</TD>
								<TD>
									{child.locale_content.en.help_description}
								</TD>
							</TR>
						}
						)}
					</tbody>
				</Table>
				<br></br>
				<HelpModal showModal={this.state.showModal} openModal={this.openModal}><HelpNew helpItem={this.state.openHelp} submit={this.updateHelpItem}/></HelpModal>
			</div>
		)
	}
}


export default HelpList