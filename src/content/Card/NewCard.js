import React, { Component, Fragment } from 'react'
import { FormContainer, FormImg, Header, ProjectInfo, Title, ProjectInfoCategory, ButtonContainer, Button, ControlsContainer, ExpandButtonContainer } from './NewCardStyles'
import { Icon } from 'odeum-ui'

export default class NewFormCard extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			expand: false,
			horizOpen: false
		}
	}
	handleExpand = (e) => {
		if (this.state.expand) {
			// this.setState({ expand: false }, this.props.handleExpand(-1))
			// this.context.handleExpand()
		}
		else {
			// this.setState({ expand: true }, this.props.handleExpand(this.props.id))
			// this.context.handleExpand()

		}
	}
	expandHoriz = (e) => {
		this.setState({ horizOpen: !this.state.horizOpen })
	}
	render() {
		const { label, date, regs, resp } = this.props
		const { expand, horizOpen } = this.state
		return (
			<div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}>

				<FormContainer expand={expand} id={this.props.id} horizOpen={horizOpen}>
					<FormImg>
						<img src='' alt='projectimg' />
					</FormImg>
					<Header>
						<Icon icon={'info'} iconSize={22} style={{ marginRight: '5px' }} />{label}</Header>
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

					{/* {expand ? <div>Lorem Ipsum </div> : null} */}
				</FormContainer>
				<ControlsContainer>
					<Fragment>
						<ButtonContainer horizOpen={this.state.horizOpen} style={{ flexFlow: 'row nowrap' }}>
							<Button horizOpen={this.state.horizOpen} onClick={this.handleExpand}>
								<Icon color={'#5E5E5E'} icon={'mode_edit'} iconSize={23} />
							</Button>
							<Button horizOpen={this.state.horizOpen}>
								<Icon color={'#5E5E5E'} icon={'share'} iconSize={23} />
							</Button>
							<Button horizOpen={this.state.horizOpen}>
								<Icon color={'#5E5E5E'} icon={'library_add'} iconSize={23} />
							</Button>
						</ButtonContainer>
						<ExpandButtonContainer horizOpen={false}>
							<div onClick={this.expandHoriz}
								style={{ border: 'none', backgroundColor: 'inherit', outline: 0 }}>
								<Icon icon={'more_horiz'} iconSize={23}/>
							</div>
						</ExpandButtonContainer>
					</Fragment>
				</ControlsContainer>

			</div>
		)
	}
}
