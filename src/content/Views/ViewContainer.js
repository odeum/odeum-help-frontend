import React, { Component } from 'react'
import CardView from './CardView'
import ListView from './ListView'
import MapView from './MapView'
import { HeaderContainer, /* ChangeViewButton */ChangeViewButtonCard, ChangeViewButtonMap, ChangeViewButtonList, Input, Select, ChangeViewButtonContainer, HeaderListContainer, CellHeaderContainer, LabelHeader, CellHeader, ResponsibleHeader } from './ViewStyles'
import { Icon } from 'odeum-ui'
// var _ = require('lodash')
// import { DateRangePicker } from 'react-dates'
// import DayPickerRangeControllerWrapper from './Components/DatePicker'
import 'react-dates/lib/css/_datepicker.css'
import { Text } from '../List/ListStyles'

export default class ViewContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			view: 0,
			pageSize: 10,
			searchString: '',
			sortOpen: false,
			sortColumn: 'name',
			sortDirection: false, //false - alphabetically, true - reverse

		}
		this.listPageSizes = [1, 10, 20, 30, 40, 50, 80, 100]
		this.cardPageSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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

	changeView = (int) => (e) => {
		e.preventDefault()
		this.setState({ view: int })
		return int === 0 ? this.setState({ pageSize: 8 }) :
			int === 1 ? this.setState({ pageSize: 30 })
				: null
	}

	handleSearch = (e) => {
		this.setState({ searchString: e.target.value })
	}

	handlePageSize = (e) => {
		this.setState({ pageSize: parseInt(e.target.value, 10) })
	}

	handleFocusSort = (sortOpen) => e => {
		e.preventDefault()
		this.setState({ sortOpen: sortOpen })
	}

	handleSort = (column) => e => {
		e.preventDefault()
		if (this.state.sortColumn !== column)
			this.setState({
				sortColumn: column,
				sortDirection: false
			})
		else
			this.setState({
				sortDirection: !this.state.sortDirection
			})
	}

	activeColumnSort = (col) => {
		// e.preventDefault()
		return col === this.state.sortColumn ? true : false
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

	renderView = () => {
		const { pageSize, view, sortColumn, sortDirection } = this.state
		const { items } = this.props
		switch (view) {
			case 0:
				return <CardView
					pageSize={pageSize}
					sortColumn={sortColumn}
					sortDirection={sortDirection}
					handleSort={this.handleSort}
					items={this.filterItems(items)}
				/>
			case 1:
				return <ListView
					pageSize={pageSize}
					sortColumn={sortColumn}
					sortDirection={sortDirection}
					handleSort={this.handleSort}
					items={this.filterItems(items)}
				/>

			case 2:
				return <MapView
					pageSize={pageSize}
					sortColumn={sortColumn}
					handleSort={this.handleSort}
					items={this.filterItems(items)}
				/>
			default:
				break
		}
	}

	render() {
		const { view, searchString, pageSize } = this.state
		return (
			<React.Fragment>
				<HeaderContainer>
					<Icon icon="search" iconSize={20} style={{ margin: 3 }} />
					<Input onChange={this.handleSearch} value={searchString} />
					<Select onChange={this.handlePageSize} value={pageSize}>
						{this.renderPageSizes()}
					</Select>
					<div style={{ position: 'relative', border: '1px solid #efe', borderRadius: 4,  }} onMouseLeave={this.handleFocusSort(false)}>
						<div onMouseEnter={this.handleFocusSort(true)} >
							<Icon icon={'visibility'} iconSize={20} style={{ margin: 3 }}/>
						</div>
						{this.state.sortOpen && <HeaderListContainer style={{ position: 'absolute', zIndex: 3, margin: 0 }}>
							<CellHeaderContainer style={{ display: 'flex', flexFlow: 'column nowrap', width: '200px' }}>
								<LabelHeader onClick={this.handleSort('name')} active={this.activeColumnSort('name')} sorting={this.state.sortDirection}>
									<Text>Name</Text>
								</LabelHeader>
								<CellHeader onClick={this.handleSort('progress')} active={this.activeColumnSort('progress')} sorting={this.state.sortDirection}>
									<Text>Gennemfort</Text>
								</CellHeader>
								<CellHeader onClick={this.handleSort('date')} active={this.activeColumnSort('date')} sorting={this.state.sortDirection}>
									<Text>Dato</Text>
								</CellHeader>
								<ResponsibleHeader onClick={this.handleSort('responsible')} active={this.activeColumnSort('responsible')} sorting={this.state.sortDirection}>
									<Text>Responsible</Text>
								</ResponsibleHeader>
							</CellHeaderContainer>
						</HeaderListContainer>}
					</div>
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
