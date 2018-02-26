import React, { PureComponent, /* Fragment */ } from 'react'
import { FormContainerExpanded, FormImg, Header, ProjectInfo, ProjectInfoCategory, Title, VerticalButtonContainer, ExpandedFormDiv, overlayTransition, transitionStyles } from '../NewCardStyles'
import Icon from 'odeum-ui/lib/components/Icon/Icon'
// import { Transition } from 'react-transition-group'
export default class CardExpanded extends PureComponent {

	render() {
		const { transitionState, date, regs, resp, label, innerRef } = this.props
		return (<ExpandedFormDiv style={{ ...overlayTransition[transitionState] }}>
			<FormContainerExpanded style={{ ...transitionStyles[transitionState] }} innerRef={innerRef}>
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
			</FormContainerExpanded>
			<VerticalButtonContainer style={{ ...overlayTransition[transitionState] }} horizOpen={false} onClick={this.props.handleExpand}>
				<Icon icon={'more_vert'} iconSize={23} />
			</VerticalButtonContainer>
		</ExpandedFormDiv>
		)
	}
}
