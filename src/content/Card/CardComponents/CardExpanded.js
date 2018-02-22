import React, { Component } from 'react'
import { FormContainerExpanded, FormImg, Header, ProjectInfo, ProjectInfoCategory, Title, VerticalButtonContainer, ExpandedFormDiv } from '../NewCardStyles'
import Icon from 'odeum-ui/lib/components/Icon/Icon'

export default class CardExpanded extends Component {
	render() {
		const { date, regs, resp, label } = this.props
		return (
			<ExpandedFormDiv>



				<FormContainerExpanded>
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
				<VerticalButtonContainer horizOpen={false} onClick={this.handleExpand}>
					<Icon icon={'more_vert'} iconSize={23} />
				</VerticalButtonContainer>

			</ExpandedFormDiv>
		)
	}
}
