import React, { Component } from 'react'
import CardView from './CardView'
import ListView from './ListView'
import MapView from './MapView'
import { HeaderContainer } from './ViewStyles'

export default class ViewContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			view: 0
		}
	}
	renderView() {
		switch (this.state.view) {
			case 0:
				return <CardView>{this.props.children}</CardView>
			case 1:
				return <ListView>{this.props.children}</ListView>
			case 2:
				return <MapView>{this.props.children}</MapView>
			default:
				break
		}
	}
	render() {
		return (
			<div>
				<HeaderContainer>

				</HeaderContainer>
				{this.renderView()}
			</div>
		)
	}
}
