import React, { Component } from 'react'
import { Text, FormCardContainer, FormImg, ProjectInfoContainer, ProjectInfoCategory, ProjectInfo, ProjectInfoTitle, HorizontalControls, VerticalControls, VerticalButton, HorizontalButton, HorizontalControlsDrawer, Shadow, ControlButton } from './FormCardV2Styles'
import { Icon } from 'odeum-ui'

export default class FormCard extends Component {
	constructor(props) {
		super(props)

		this.state = {
			horizontalExpand: false,
			verticalExpand: false
		}
	}
	handleHorizontalExpand = () => {
		this.setState({ horizontalExpand: !this.state.horizontalExpand })
	}
	render() {
		const { horizontalExpand, /* verticalExpand */ } = this.state
		const { item, column } = this.props
		return (
			<FormCardContainer>
				<Shadow>
					<FormImg img={item.img ? item.img : 'https://picsum.photos/1920/1404/?random=0'} />
					<div style={{ display: 'flex', height: 30, fontSize: 26, width: '100%', justifyContent: 'flex-start', alignItems: 'center', margin: 4 }}>
						<Icon icon={'info'} iconSize={30} />
						<Text title={item.name}>{item.name}</Text>
					</div>
					<ProjectInfoContainer>
						{Object.keys(item).map((i, index) =>
							column[index].visible ?
								<ProjectInfoCategory key={index}>
									<ProjectInfoTitle title={item[i].toString()}>
										{column[index].column.charAt(0).toUpperCase() + column[index].column.slice(1)}
									</ProjectInfoTitle>
									<ProjectInfo>
										{item[i] instanceof Date ? item[i].toLocaleDateString() : item[i].toString()}
									</ProjectInfo>
								</ProjectInfoCategory> : null
						)}
					</ProjectInfoContainer>
					<div style={{ display: 'flex', flexFlow: 'row', width: '70%', height: 20, background: '#DEDEDE', overflow: 'hidden', borderRadius: '4px', margin: '10px', justifyContent: 'center', position: 'relative' }}>
						<div style={{ zIndex: 4, color: item.progress > 50 ? '#FFF' : '#000' }}>{item.progress ? item.progress + '%' : '0%'}</div>
						<div style={{ position: 'absolute', height: '100%', left: 0, display: 'flex', justifyContent: 'center', width: item.progress ? item.progress + '%' : '0%', background: '#3B97D3', color: '#fff' }} ></div>
					</div>
				</Shadow>
				<HorizontalControls expand={horizontalExpand} onClick={this.handleHorizontalExpand}>
					<HorizontalControlsDrawer expand={horizontalExpand}>
						<ControlButton><Icon icon={'mode_edit'} iconSize={30} /></ControlButton>
						<ControlButton><Icon icon={'mode_edit'} iconSize={30} /></ControlButton>
						<ControlButton><Icon icon={'mode_edit'} iconSize={30} /></ControlButton>
					</HorizontalControlsDrawer>
					<HorizontalButton expand={horizontalExpand}>
						<div style={{ transform: 'perspective(20px) rotateX(20deg)' }}>
							{'\u2022 \u2022 \u2022'}
						</div>
					</HorizontalButton>
				</HorizontalControls>
				<VerticalControls>
					<div style={{
						display: 'flex', flexFlow: 'column nowrap', transform: 'perspective(20px) rotateY(-20deg)'
					}}>
						<VerticalButton>{'\u2022'}</VerticalButton>
						<VerticalButton>{'\u2022'}</VerticalButton>
						<VerticalButton>{'\u2022'}</VerticalButton>
					</div>
				</VerticalControls>
			</FormCardContainer>
		)
	}
}
