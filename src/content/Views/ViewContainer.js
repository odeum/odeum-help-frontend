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
	DropDown, DropDownContainer, DropDownButton, Margin, DropDownItemWithArrow, DropDownItem, Input, SearchContainer, View, DropDownItemWithDot
} from './ViewStyles'
import { Text } from '../List/ListStyles'

export default class ViewContainer extends Component {
	constructor(props) {
		super(props)
		var settings = JSON.parse(window.localStorage.getItem('visibleColumns')) || undefined
		this.state = {
			inputFocus: false,
			view: 1,
			pageSize: 10,
			searchString: '',
			sortOpen: false,
			pageSizeOpen: false,
			sortColumn: settings ? settings[settings.findIndex(c => c.visible === true)].column : Object.keys(this.props.items[0])[0],
			sortDirection: false,
			visibleColDropDown: false,
			visibleColumns: settings || Object.keys(this.props.items[0]).map(c => c = { column: c, visible: true })

		}
		this.listPageSizes = [1, 10, 20, 30, 40, 50, 80, 100]
		this.cardPageSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	}
	componentWillUpdate = (nextProps, nextState) => {
	}

	createInputRef = (node) => {
		this.node = node
	}

	filterItems = () => {
		const { searchString, sortDirection, sortColumn } = this.state
		var searchStr = searchString.toLowerCase()
		var arr = this.props.items
		var keys = Object.keys(arr[0])
		var filtered = arr.filter(c => {
			var contains = keys.map(key => {
				if (c[key] instanceof Date)
					return c[key].toLocaleDateString().toLowerCase().includes(searchStr)
				else
					return c[key].toString().toLowerCase().includes(searchStr)
			})
			return contains.indexOf(true) !== -1 ? true : false
		})
		switch (sortDirection) {
			case true:
				return filtered.sort((a, b) => a[sortColumn] > b[sortColumn] ? -1 : a[sortColumn] < b[sortColumn] ? 1 : 0)
			case false:
				return filtered.sort((a, b) => a[sortColumn] < b[sortColumn] ? -1 : a[sortColumn] > b[sortColumn] ? 1 : 0)
			default:
				return filtered
		}
	}

	changeView = (int) => (e) => {
		e.preventDefault()
		this.setState({ view: int })
		return int === 0 ? this.setState({ pageSize: 8 }) :
			int === 1 ? this.setState({ pageSize: 30 })
				: null
	}

	handleVisibility = (visibleColDropDown) => e => {
		e.preventDefault()
		this.setState({ visibleColDropDown: visibleColDropDown })
	}

	handleVisibleColumn = (column) => e => {
		e.preventDefault()
		var newArr = this.state.visibleColumns.map(c => c.column === column ? { column: c.column, visible: !c.visible } : c)
		this.setState({ visibleColumns: newArr })
		window.localStorage.setItem('visibleColumns', JSON.stringify(newArr))
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
		this.setState({ inputFocus: true })
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
					columns={this.state.visibleColumns}
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



	renderVisibleColumns = (visibleColDropDown) => {
		return <DropDownContainer onMouseLeave={this.handleVisibility(false)}>
			<DropDownButton onMouseEnter={this.handleVisibility(true)}>
				<Icon icon={'visibility'} color={'#FFF'} active={true} iconSize={20} style={{ margin: 3 }} />
			</DropDownButton>
			<Margin />
			{visibleColDropDown && <DropDown>
				{this.state.visibleColumns.map((c, i) =>
					<DropDownItemWithDot key={i} onClick={this.handleVisibleColumn(c.column)} active={c.visible}>
						<Text>{c.column.charAt(0).toUpperCase() + c.column.slice(1)}</Text>
					</DropDownItemWithDot>
				)}
			</DropDown>

			}
		</DropDownContainer>
	}

	renderSortOption = (sortOpen, sortDirection) => {

		return <DropDownContainer onMouseLeave={this.handleSortOpen(false)}>
			<DropDownButton onMouseEnter={this.handleSortOpen(true)} >
				<Icon icon={'sort_by_alpha'} color={'#FFF'} active={true} iconSize={20} style={{ margin: 3 }} />
			</DropDownButton>
			<Margin />
			{sortOpen && <DropDown>
				{this.state.visibleColumns.map((c, i) =>
					c.visible ? <DropDownItemWithArrow key={i} onClick={this.handleSort(c.column)} active={this.handleActiveColumn(c.column)} sorting={sortDirection}>
						<Text>{c.column.charAt(0).toUpperCase() + c.column.slice(1)}</Text>
					</DropDownItemWithArrow>
						: null)}
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
		return <SearchContainer onClick={this.handleFocusInput} active={this.state.inputFocus}>
			<Icon icon={'search'} iconSize={20} style={{ margin: 3, paddingRight: 3, borderRight: '1px solid #cecece' }} />
			<Input innerRef={this.createInputRef} onChange={this.handleSearch} value={searchString} onBlur={() => this.state.inputFocus ? this.setState({ inputFocus: false }) : null} />
		</SearchContainer>
	}

	render() {
		const { view, searchString, pageSize, pageSizeOpen, sortOpen, sortDirection, sortColumn, visibleColDropDown } = this.state
		return <View>
			<HeaderContainer>
				<DayPickerRangeControllerWrapper />
				{this.renderSearchOption(searchString)}
				{this.renderPageSizeOption(view, pageSize, pageSizeOpen)}
				{this.renderSortOption(sortOpen, sortDirection)}
				{this.renderVisibleColumns(visibleColDropDown)}
				{this.renderChangeViewOptions(view)}
			</HeaderContainer>
			{this.renderView(pageSize, view, sortColumn, sortDirection)}
		</View>

	}
}