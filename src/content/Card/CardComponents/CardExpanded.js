import React, { Component } from 'react'
import { FormContainerExpanded, FormImg, Header, ProjectInfo, ProjectInfoCategory, Title } from '../NewCardStyles'
import Icon from 'odeum-ui/lib/components/Icon/Icon'

export default class CardExpanded extends Component {
	render() {
		const { date, regs, resp, label } = this.props
		return (
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', zIndex: 3, width: '100%', height: '100%', background: '#3e3e3e3e' }}>
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
			</div>
		)
	}
}
