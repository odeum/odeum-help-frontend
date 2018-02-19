import React, { Component } from 'react'
import { FormContainer, FormImg, Header, ProjectInfo, Title, ProjectInfoCategory, ButtonContainer, Button } from './NewCardStyles'
import { Icon } from 'odeum-ui'

export default class NewFormCard extends Component {
	constructor(props) {
		super(props)

		this.state = {
			expand: false
		}
	}
	handleExpand = (e) => {
		this.setState({ expand: !this.state.expand })
	}
	render() {
		const { label, date, regs, resp } = this.props
		const { expand } = this.state
		return (
			<FormContainer expand={expand} id={this.props.id}>
				<FormImg>
					<img src='' alt='projectimg' />
				</FormImg>
				<Header>
					<Icon icon={'info'} iconSize={22} style={{ marginRight: 5 }} />{label}</Header>
				<ProjectInfo>
					<ProjectInfoCategory>
						<Title>Date</Title>
						{date}
					</ProjectInfoCategory>
					<ProjectInfoCategory>
						<Title>Reg.</Title>
						{regs}
					</ProjectInfoCategory>
					<ProjectInfoCategory>
						<Title>Responsible</Title>
						{resp}
					</ProjectInfoCategory>
				</ProjectInfo>
				{/* <div style={{ background: 'green', margin: 10, padding: 3 }}> progressBar here</div> */}
				<ButtonContainer>
					<Button onClick={this.handleExpand}>
						<Icon color={'#5E5E5E'} icon={'mode_edit'} iconSize={35} />
					</Button>
					<Button>
						<Icon color={'#5E5E5E'} icon={'share'} iconSize={35} />
					</Button>
					<Button>
						<Icon color={'#5E5E5E'} icon={'library_add'} iconSize={35} />
					</Button>
				</ButtonContainer>
				{/* {expand ? <div>Lorem Ipsum </div> : null} */}
			</FormContainer>
		)
	}
}
