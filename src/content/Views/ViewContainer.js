import React, { Component } from 'react'
import CardView from './CardView'
import ListView from './ListView'
import MapView from './MapView'
import {
	HeaderContainer, ChangeViewButtonCard,
	ChangeViewButtonMap, ChangeViewButtonList, Input,
	ChangeViewButtonContainer,
	DropDown, DropDownContainer, DropDownButton, Margin, DropDownItemWithArrow, DropDownItem
} from './ViewStyles'
import { Icon } from 'odeum-ui'
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
			pageSizeOpen: false,
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

	handlePageSize = (size) => e => {
		e.preventDefault()
		this.setState({ pageSize: parseInt(size, 10) })
	}

	handlePageSizeOpen = (pageSizeOpen) => e => {
		e.preventDefault()
		this.setState({ pageSizeOpen: pageSizeOpen })
	}

	handleSortOpen = (sortOpen) => e => {
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

	activeColumnSort = (col) => col === this.state.sortColumn ? true : false

	renderPageSizesNew = () => {
		switch (this.state.view) {
			case 0:
				return this.cardPageSizes.map(o =>
					<DropDownItem key={o} active={o === this.state.pageSize ? true : false} onClick={this.handlePageSize(o)}>{o}</DropDownItem>)
			case 1:
				return this.listPageSizes.map(o =>
					<DropDownItem key={o} active={o === this.state.pageSize ? true : false} onClick={this.handlePageSize(o)}>{o}</DropDownItem>)
			default:
				return null
		}
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
	renderPageSizeOption = (pageSize, pageSizeOpen) => {
		return <DropDownContainer onMouseLeave={this.handlePageSizeOpen(false)}>
			<DropDownButton onMouseEnter={this.handlePageSizeOpen(true)}>
				{pageSize}
			</DropDownButton>
			<Margin />
			<DropDown>
				{pageSizeOpen && this.renderPageSizesNew()}
			</DropDown>
		</DropDownContainer>
	}
	renderSortOption = (sortOpen, sortDirection) => {
		return <DropDownContainer onMouseLeave={this.handleSortOpen(false)}>
			<DropDownButton view={0} onMouseEnter={this.handleSortOpen(true)} >
				<Icon icon={'visibility'} color={'#FFF'} ative={true} iconSize={20} style={{ margin: 3 }} />
			</DropDownButton>
			<Margin />
			{sortOpen && <DropDown>

				<DropDownItemWithArrow onClick={this.handleSort('name')} active={this.activeColumnSort('name')} sorting={sortDirection}>
					<Text>Name</Text>
				</DropDownItemWithArrow>
				<DropDownItemWithArrow onClick={this.handleSort('progress')} active={this.activeColumnSort('progress')} sorting={sortDirection}>
					<Text>Gennemfort</Text>
				</DropDownItemWithArrow>
				<DropDownItemWithArrow onClick={this.handleSort('date')} active={this.activeColumnSort('date')} sorting={sortDirection}>
					<Text>Dato</Text>
				</DropDownItemWithArrow>
				<DropDownItemWithArrow onClick={this.handleSort('responsible')} active={this.activeColumnSort('responsible')} sorting={sortDirection}>
					<Text>Responsible</Text>
				</DropDownItemWithArrow>
			</DropDown>}
		</DropDownContainer>
	}
	renderChangeViewOptions = (view) => {
		return <ChangeViewButtonContainer>
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
	}
	render() {
		const { view, searchString, pageSize, pageSizeOpen, sortOpen, sortDirection } = this.state
		return (
			<React.Fragment>
				<HeaderContainer>
					<Icon icon="search" iconSize={20} style={{ margin: 3 }} />
					<Input onChange={this.handleSearch} value={searchString} />
					{this.renderPageSizeOption(pageSize, pageSizeOpen)}
					{this.renderSortOption(sortOpen, sortDirection)}
					{this.renderChangeViewOptions(view)}
				</HeaderContainer>
				{this.renderView()}
			</React.Fragment>
		)
	}
}
