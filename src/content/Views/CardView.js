import React, { Component } from 'react'
import { CardListContainer, HeaderListContainer, CellHeaderContainer, LabelHeader, CellHeader, ResponsibleHeader } from './ViewStyles'
import Pagination from '../Pagination/Pagination'
import FormCard from '../Card/FormCard'
import { Text } from '../List/ListStyles'

export default class CardView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pageOfItems: []
		}
	}
	renderChildren = () => {
		const arr = this.props.items.map((c, i) => {
			return <FormCard
				key={i}
				resp={c.responsible}
				label={c.name}
				date={c.date.toLocaleDateString()}
				img={c.img}
				progress={c.progress}
			/>
		})
		return arr
	}
	handleSort = (column) => e => {
		e.preventDefault()
		this.props.handleSort(column)
	}
	onChangePage = (pageOfItems) => {
		// console.log('onChangePage', pageOfItems)
		// update state with new page of items
		if (this.state.pageOfItems !== pageOfItems)
			this.setState({ pageOfItems: pageOfItems })
	}
	activeColumnSorting = (col) => {
		// e.preventDefault()
		return col === this.props.sortColumn ? true : false
	}
	render() {
		// console.log('CardView', this.props.pageSize)
		// const arr = this.renderChildren()
		return (

			this.props.items.length !== 0 ?
				<React.Fragment>
					<HeaderListContainer >
						<CellHeaderContainer>
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
						</CellHeaderContainer>
					</HeaderListContainer>
					<CardListContainer pageSize={this.props.pageSize}>
						{this.state.pageOfItems.map((c, i) =>
							<FormCard
								key={i}
								resp={c.responsible}
								label={c.name}
								date={c.date.toLocaleDateString()}
								img={c.img}
								progress={c.progress}
							/>
						)}</CardListContainer>
					<Pagination items={this.props.items} onChangePage={this.onChangePage} pageSize={this.props.pageSize} />
				</React.Fragment>
				:
				<div>No Items</div>

		)
	}
}