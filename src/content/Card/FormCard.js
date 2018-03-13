import React, { PureComponent } from 'react'
import {
	FormContainer, FormImg, Header, ProjectInfo, Title, ProjectInfoCategory, ButtonContainer, Button, ControlsContainer,
	ExpandButtonContainer, VerticalButtonContainer, CompleteContainer, ContainerWHorizControls,
	ContainerWHorizControlsTransitions, overlayTransition, FormContainerTransitions, CompleteContainerTransitions, /* Img */
} from './FormCardStyles'
import { Icon } from 'odeum-ui'
import { Transition } from 'react-transition-group'

export default class FormCard extends PureComponent {
	constructor(props, context) {
		super(props, context)

		this.state = {
			expand: this.props.cardExpand || false,
			horizOpen: false,
			imgLoad: 'Loading',
			imgExpand: false
		}
	}

	onImageHover = () => {
		this.imageHover = window.setTimeout(() => this.setState({ imgExpand: true }), 1000)
	}
	onImageLeave = () => {
		window.clearTimeout(this.imageHover)
		this.setState({ imgExpand: false })
	}
	setExpandedCardRef = (node) => {
		this.node = node
	}
	componentWillMount = () => {
		if (this.props.cardExpand && this.props.handleCardExpand)
			document.addEventListener('click', this.onClickOutside, false)

	}

	onClickOutside = (e) => {
		if (this.state.expand) {
			if (this.node !== null && this.node !== undefined) {
				if (!this.node.contains(e.target)) {
					this.setState({ expand: false })
					document.removeEventListener('click', this.onClickOutside, false)
					if (this.props.handleCardExpand)
						this.props.handleCardExpand()
				}
			}
		}
	}

	handleExpand = (e) => {
		if (this.state.expand) {
			this.setState({ expand: false })
			document.removeEventListener('click', this.onClickOutside, false)
			if (this.props.handleCardExpand)
				this.props.handleCardExpand()
		}
		else {
			this.setState({ expand: true })
			document.addEventListener('click', this.onClickOutside, false)
			if (this.props.handleCardExpand)
				this.props.handleCardExpand()

		}
	}

	expandHoriz = (e) => {
		this.setState({ horizOpen: !this.state.horizOpen })
	}
	handleImg = (load) => (e) => {
		e.preventDefault()
		this.setState({ imgLoad: load })
	}


	render() {
		const { label, date, /* regs, */ resp, img } = this.props
		const { expand, horizOpen } = this.state
		return (
			<Transition in={this.state.expand} timeout={300}>
				{state => <CompleteContainer style={{ ...overlayTransition[state] }} expand={expand}>
					<CompleteContainer style={{ ...CompleteContainerTransitions[state] }}>
						<ContainerWHorizControls expand={expand} style={{ ...ContainerWHorizControlsTransitions[state] }} innerRef={this.setExpandedCardRef}>
							<FormContainer img={img} style={{ ...FormContainerTransitions[state] }} expand={expand} id={this.props.id} horizOpen={horizOpen}>
								<FormImg image={img} onMouseEnter={this.onImageHover} onMouseLeave={this.onImageLeave} imgExpand={this.state.imgExpand} />
								<Header>
									<Icon icon={'info'} iconSize={22} style={{ marginRight: '5px' }} />{label}</Header>
								<ProjectInfo style={{ color: '#000' }} expand={expand}>
									<ProjectInfoCategory>
										<Title>Date</Title>
										{date}
									</ProjectInfoCategory>
									{/* <ProjectInfoCategory>
										<Title>Reg.</Title>
										{regs}
									</ProjectInfoCategory> */}
									<ProjectInfoCategory>
										<Title>Responsible</Title>
										{resp}
									</ProjectInfoCategory>
								</ProjectInfo>
							</FormContainer>
							<ControlsContainer>
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
								<ExpandButtonContainer horizOpen={this.state.horizOpen} onClick={this.expandHoriz}>
									<Icon icon={'more_horiz'} iconSize={23} />
								</ExpandButtonContainer>
							</ControlsContainer>
						</ContainerWHorizControls>
						<VerticalButtonContainer horizOpen={false} onClick={this.handleExpand}>
							<Icon icon={'more_vert'} iconSize={23} />
						</VerticalButtonContainer>
					</CompleteContainer>
				</CompleteContainer>
				}
			</Transition>
		)
	}
}