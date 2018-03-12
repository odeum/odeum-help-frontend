import React, { Component } from 'react'
import { Icon } from 'odeum-ui'
import 'react-dates/lib/css/_datepicker.css'

import DayPickerRangeControllerWrapper from './Components/DatePicker'
import CardView from './CardView'
import ListView from './ListView'
import MapView from './MapView'

import {
	HeaderContainer, ChangeViewButtonCard,
	ChangeViewButtonMap, ChangeViewButtonList,
	ChangeViewButtonContainer,
	DropDown, DropDownContainer, DropDownButton, Margin, DropDownItemWithArrow, DropDownItem, Input
} from './ViewStyles'
import { Text } from '../List/ListStyles'

export default class ViewContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			view: 1,
			pageSize: 10,
			searchString: '',
			sortOpen: false,
			pageSizeOpen: false,
			sortColumn: 'name',
			sortDirection: false,

		}
		this.listPageSizes = [1, 10, 20, 30, 40, 50, 80, 100]
		this.cardPageSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	}


	createInputRef = (node) => {
		this.node = node
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

	handleFocusInput = () => {
		this.node.focus()
	}

	handleActiveColumn = (col) => col === this.state.sortColumn ? true : false


	renderPageSizes = (view, pageSize) => {
		switch (view) {
			case 0:
				return this.cardPageSizes.map(o =>
					<DropDownItem key={o} active={o === pageSize ? true : false} onClick={this.handlePageSize(o)}>{o}</DropDownItem>)
			case 1:
				return this.listPageSizes.map(o =>
					<DropDownItem key={o} active={o === pageSize ? true : false} onClick={this.handlePageSize(o)}>{o}</DropDownItem>)
			default:
				return null
		}
	}

	renderView = (pageSize, view, sortColumn, sortDirection) => {
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

	renderPageSizeOption = (view, pageSize, pageSizeOpen) => {
		return <DropDownContainer onMouseLeave={this.handlePageSizeOpen(false)}>
			<DropDownButton onMouseEnter={this.handlePageSizeOpen(true)}>
				{pageSize}
			</DropDownButton>
			<Margin />
			<DropDown>
				{pageSizeOpen && this.renderPageSizes(view, pageSize)}
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
				<DropDownItemWithArrow onClick={this.handleSort('name')} active={this.handleActiveColumn('name')} sorting={sortDirection}>
					<Text>Name</Text>
				</DropDownItemWithArrow>
				<DropDownItemWithArrow onClick={this.handleSort('progress')} active={this.handleActiveColumn('progress')} sorting={sortDirection}>
					<Text>Gennemfort</Text>
				</DropDownItemWithArrow>
				<DropDownItemWithArrow onClick={this.handleSort('date')} active={this.handleActiveColumn('date')} sorting={sortDirection}>
					<Text>Dato</Text>
				</DropDownItemWithArrow>
				<DropDownItemWithArrow onClick={this.handleSort('responsible')} active={this.handleActiveColumn('responsible')} sorting={sortDirection}>
					<Text>Responsible</Text>
				</DropDownItemWithArrow>
			</DropDown>
			}
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

	renderSearchOption = (searchString) => {
		return <Input onClick={this.handleFocusInput}>
			<Icon icon={'search'} iconSize={20} style={{ margin: 3, paddingRight: 3, borderRight: '1px solid #cecece' }} />
			<input ref={this.createInputRef} onChange={this.handleSearch} value={searchString} style={{ appearance: 'none', border: 'none', background: 'inherit' }} />
		</Input>
	}

	render() {
		const { view, searchString, pageSize, pageSizeOpen, sortOpen, sortDirection, sortColumn } = this.state
		return <React.Fragment>
			<HeaderContainer>
				<DayPickerRangeControllerWrapper />
				{this.renderSearchOption(searchString)}
				{this.renderPageSizeOption(view, pageSize, pageSizeOpen)}
				{this.renderSortOption(sortOpen, sortDirection)}
				{this.renderChangeViewOptions(view)}
			</HeaderContainer>
			{this.renderView(pageSize, view, sortColumn, sortDirection)}
		</React.Fragment>

	}
}