import React, { Component } from 'react'
import ListCard from '../List/ListCard'
import Pagination from '../Pagination/Pagination'
import { ListContainer, LabelHeader, CellHeader, ResponsibleHeader, HeaderListContainer, CellHeaderContainer } from './ViewStyles'
import Checkbox from './Components/CheckBox'
import { Text } from '../List/ListStyles'

export default class ListView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pageOfItems: [],
			checkedItems: [],
		}
	}

	handleSort = (column) => e => {
		this.props.handleSort(column)(e)
	}

	onCheckedItem = (id, add) => {
		var newArr = this.state.checkedItems
		if (add)
			newArr.push(id)
		else
			newArr = newArr.filter(c => c !== id)
		this.setState({ checkedItems: newArr })

	}

	onChangePage = (pageOfItems) => {
		if (this.state.pageOfItems !== pageOfItems)
			this.setState({ pageOfItems: pageOfItems, checkedItems: [] })
	}
	activeColumnSorting = (col) => {
		// e.preventDefault()
		return col === this.props.sortColumn ? true : false
	}
	render() {
		return (
			<React.Fragment>
				<HeaderListContainer >
					<Checkbox />
					<CellHeaderContainer columnCount={this.props.columns.length}>
						{this.props.columns ? this.props.columns.map(col =>
							<LabelHeader onClick={this.handleSort(col)} active={this.activeColumnSorting(col)} sorting={this.props.sortDirection}>
								<Text>{col}</Text>
							</LabelHeader>
						) :
							<React.Fragment>
								<LabelHeader onClick={this.handleSort('name')} active={this.activeColumnSorting('name')} sorting={this.props.sortDirection}>
									<Text>Name</Text>
								</LabelHeader>
								<CellHeader onClick={this.handleSort('progress')} active={this.activeColumnSorting('progress')} sorting={this.props.sortDirection}>
									<Text>Gennemfort</Text>
								</CellHeader>
								<CellHeader onClick={this.handleSort('date')} active={this.activeColumnSorting('date')} sorting={this.props.sortDirection}>
									<Text>Dato</Text>
								</CellHeader>
								<ResponsibleHeader onClick={this.handleSort('responsible')} active={this.activeColumnSorting('responsible')} sorting={this.props.sortDirection}>
									<Text>Responsible</Text>
								</ResponsibleHeader>
							</React.Fragment>}
					</CellHeaderContainer>
				</HeaderListContainer>
				<ListContainer pageSize={this.props.pageSize} >

					{this.props.items.length !== 0 ?
						this.state.pageOfItems.map((c, i) =>
							<ListCard
								columnCount={this.props.columns.length}
								item={c}
								key={i}
								// id={c.id}
								// resp={c.responsible}
								// label={c.name}
								// date={c.date.toLocaleDateString()}
								// img={c.img}
								// progress={c.progress}
								onChecked={this.onCheckedItem}
							/>
						) : <div>No Items</div>}
				</ListContainer>
				<Pagination items={this.props.items} onChangePage={this.onChangePage} pageSize={this.props.pageSize} />
			</React.Fragment>

		)
	}
}
