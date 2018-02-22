import React, { Component, Fragment } from 'react'
import { FormContainer, FormImg, Header, ProjectInfo, Title, ProjectInfoCategory, ButtonContainer, Button, ControlsContainer, ExpandButtonContainer, VerticalButtonContainer } from './NewCardStyles'
import { Icon } from 'odeum-ui'
import CardExpanded from './CardComponents/CardExpanded'
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
			this.setState({ expand: false }, this.props.handleExpand(-1))
			// this.context.handleExpand()
		}
		else {
			this.setState({ expand: true }, this.props.handleExpand(this.props.id))
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
			<Fragment>
				<div style={{ display: 'flex', flexFlow: 'row nowrap', margin: '10px', filter: expand ? 'blur(5px)' : null }}>
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
								<ExpandButtonContainer horizOpen={false} onClick={this.expandHoriz}>

									<Icon icon={'more_horiz'} iconSize={23} />
								</ExpandButtonContainer>
							</Fragment>
						</ControlsContainer>

					</div>
					<VerticalButtonContainer horizOpen={false} onClick={this.handleExpand}>
						<Icon icon={'more_vert'} iconSize={23} />
					</VerticalButtonContainer>
				</div>
				{expand ? <CardExpanded
					regs={regs}
					label={label}
					date={date}
					resp={resp}
				/> : null}
			</Fragment>
		)
	}
}
