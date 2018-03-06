import React, { Component } from 'react'
import CardView from './CardView'
import ListView from './ListView'
import MapView from './MapView'
import { HeaderContainer, /* ChangeViewButton */ChangeViewButtonCard, ChangeViewButtonMap, ChangeViewButtonList, Input, Select, ChangeViewButtonContainer } from './ViewStyles'
import { Icon } from 'odeum-ui'
// var _ = require('lodash')

export default class ViewContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			view: 1,
			pageSize: 10,
			searchString: '',

			sortColumn: 'name',
			sortDirection: false, //false - alphabetically, true - reverse

		}
		this.listPageSizes = [1, 10, 20, 30, 40, 50, 80, 100]
		this.cardPageSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	}

	handleSort = (column, direction) => {
		// e.preventDefault()

		this.setState({
			sortColumn: column,
			sortDirection: direction
		})
	}

	renderPageSizes = () => {
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
	filterItems = () => {
		const { searchString, sortDirection, sortColumn } = this.state
		var arr = this.props.items
		var filtered = arr.filter(c => searchString === '' ||
			c.name.includes(searchString) ||
			c.progress.toString().includes(searchString) ||
			c.responsible.includes(searchString) ||
			c.date.toLocaleDateString().includes(searchString))

		switch (sortDirection) {
			case true: {
				switch (sortColumn) {
					case 'name':
						return filtered.sort((a, b) => a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
					case 'progress':
						return filtered.sort((a, b) => a.progress > b.progress ? -1 : a.progress < b.progress ? 1 : 0)
					case 'responsible':
						return filtered.sort((a, b) => a.responsible > b.responsible ? -1 : a.responsible < b.responsible ? 1 : 0)
					case 'date':
						return filtered.sort((a, b) => a.date > b.date ? -1 : a.date < b.date ? 1 : 0)
					default:
						return filtered
				}
			}
			case false: {
				switch (sortColumn) {
					case 'name':
						return filtered.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
					case 'progress':
						return filtered.sort((a, b) => a.progress > b.progress ? 1 : a.progress < b.progress ? -1 : 0)
					case 'responsible':
						return filtered.sort((a, b) => a.responsible > b.responsible ? 1 : a.responsible < b.responsible ? -1 : 0)
					case 'date':
						return filtered.sort((a, b) => a.date > b.date ? 1 : a.date < b.date ? -1 : 0)

					default:
						return filtered
				}
			}
			default: return
		}
	}

	renderView = () => {
		const { pageSize, view, sort } = this.state
		const { items } = this.props
		switch (view) {
			case 0:
				return <CardView
					pageSize={pageSize}
					sort={sort}
					handleSort={this.handleSort}
					items={this.filterItems(items)}
				/>
			case 1:
				return <ListView
					pageSize={pageSize}
					handleSort={this.handleSort}
					items={this.filterItems(items)}
				/>

			case 2:
				return <MapView
					pageSize={pageSize}
					sort={sort}
					handleSort={this.handleSort}
					items={this.filterItems(items)}
				/>
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
	handleSearch = (e) => {
		this.setState({ searchString: e.target.value })
		// console.log(this.state.searchString)
	}
	handlePageSize = (e) => {
		// console.log(e.target.value)
		this.setState({ pageSize: parseInt(e.target.value, 10) })
		// console.log(this.state.pageSize)
	}
	render() {
		const { view, searchString, pageSize } = this.state
		return (
			<React.Fragment>
				<HeaderContainer>
					<Icon icon="search" style={{ margin: 3 }} />
					<Input onChange={this.handleSearch} value={searchString} />
					<Select onChange={this.handlePageSize} value={pageSize}>
						{this.renderPageSizes()}
					</Select>
					<ChangeViewButtonContainer>
						<ChangeViewButtonCard view={view} onClick={this.changeView(0)}>
							<Icon iconSize={25} icon={'view_module'} color={'#FFFFFF'} active={view === 0 ? true : false} />
						</ChangeViewButtonCard>
						<ChangeViewButtonList view={view} onClick={this.changeView(1)}>
							<Icon iconSize={25} icon={'list'} color={'#FFFFFF'} active={view === 1 ? true : false} />
						</ChangeViewButtonList>
						<ChangeViewButtonMap view={view} onClick={this.changeView(2)}>
							<Icon iconSize={25} icon={'location'} color={'#FFFFFF'} active={view === 2 ? true : false} />
						</ChangeViewButtonMap>
					</ChangeViewButtonContainer>
				</HeaderContainer>
				{this.renderView()}
			</React.Fragment>
		)
	}
}
