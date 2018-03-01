import React, { Component } from 'react'
import CardView from './CardView'
import ListView from './ListView'
import MapView from './MapView'
import { HeaderContainer } from './ViewStyles'
import { Icon } from 'odeum-ui'
var _ = require('lodash')

export default class ViewContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			view: 0,
			pageSize: 8
		}
	}
	renderView() {
		// console.log('Updating?')
		switch (this.state.view) {
			case 0:
				return <CardView pageSize={this.state.pageSize}>{this.props.items}</CardView>
			case 1:
				return <ListView>{this.props.items}</ListView>
			case 2:
				return <MapView>{this.props.items}</MapView>
			default:
				break
		}
	}
	handlePageSize = (e) => {
		// console.log(e.target.value)
		this.setState({ pageSize: parseInt(e.target.value, 10) })
		// console.log(this.state.pageSize)
	}
	render() {
		return (
			<div>
				<HeaderContainer>
					<Icon icon="search" />
					<select onChange={this.handlePageSize} value={this.state.pageSize}>
						{_.range(2, 13).map(i =>
							<option key={i} value={i}>{i}</option>
						)}
					</select>
				</HeaderContainer>
				{this.renderView()}
			</div>
		)
	}
}
