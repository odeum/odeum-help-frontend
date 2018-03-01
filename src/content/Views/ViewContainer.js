import React, { Component } from 'react'
import CardView from './CardView'
import ListView from './ListView'
import MapView from './MapView'
import { HeaderContainer, /* ChangeViewButton */ChangeViewButtonCard, ChangeViewButtonMap, ChangeViewButtonList } from './ViewStyles'
import { Icon } from 'odeum-ui'
// var _ = require('lodash')

export default class ViewContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			view: 1,
			pageSize: 8
		}
		this.listPageSizes = [10, 20, 30, 40, 50, 80, 100]
		this.cardPageSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	}
	renderPageSizes() {
		switch (this.state.view) {
			case 0:
				return this.cardPageSizes.map(o =>
					<option key={o} value={o}>{o}</option>)
			case 1:
				return this.listPageSizes.map(o =>
					<option key={o} value={o}>{o}</option>)
			default:
				return null
		}
	}
	renderView() {
		// console.log('Updating?')
		switch (this.state.view) {
			case 0:
				return <CardView pageSize={this.state.pageSize}>{this.props.items}</CardView>
			case 1:
				return <ListView pageSize={this.state.pageSize}>{this.props.items}</ListView>
			case 2:
				return <MapView pageSize={this.state.pageSize}>{this.props.items}</MapView>
			default:
				break
		}
	}
	changeView = (int) => (e) => {
		e.preventDefault()
		this.setState({ view: int })
		return int === 0 ? this.setState({ pageSize: 8 }) :
			int === 1 ? this.setState({ pageSize: 30 })
				: null
	}
	handlePageSize = (e) => {
		// console.log(e.target.value)
		this.setState({ pageSize: parseInt(e.target.value, 10) })
		// console.log(this.state.pageSize)
	}
	render() {
		const { view } = this.state
		return (
			<React.Fragment>
				<HeaderContainer>
					<Icon icon="search" style={{ margin: 3 }} />
					<input width={100} style={{ margin: 3 }} />
					<select onChange={this.handlePageSize} value={this.state.pageSize}>
						{this.renderPageSizes()}
					</select>
					<div style={{ display: 'flex', flex: 1, justifyContent: 'right', flexFlow: 'row', alignItems: 'center', margin: 3 }}>
						<ChangeViewButtonCard view={view} onClick={this.changeView(0)}>
							<Icon iconSize={25} icon={'view_module'} color={'#FFFFFF'} active={view === 0 ? true : false} />
						</ChangeViewButtonCard>
						<ChangeViewButtonList view={view} onClick={this.changeView(1)}>
							<Icon iconSize={25} icon={'list'} color={'#FFFFFF'} active={view === 1 ? true : false} />
						</ChangeViewButtonList>
						<ChangeViewButtonMap view={view} onClick={this.changeView(2)}>
							<Icon iconSize={25} icon={'location'} color={'#FFFFFF'} active={view === 2 ? true : false} />
						</ChangeViewButtonMap>
					</div>
				</HeaderContainer>
				{this.renderView()}
			</React.Fragment>
		)
	}
}
