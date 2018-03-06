import React, { Component } from 'react'
import ListCard from '../List/ListCard'
import Pagination from '../Pagination/Pagination'
import { ListContainer } from './ViewStyles'
import Checkbox from './Components/CheckBox'
import { Label, Text, Cell, Responsible } from '../List/ListStyles'

export default class ListView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pageOfItems: [],
			checkedItems: [],
			sort: {
				name: false,
				progress: false,
				date: false,
				responsible: false
			}
		}
	}
	componentWillUpdate = (nextProps, nextState) => {
		// console.log('updated')
		// console.log(this.state.pageOfItems[0], nextState.pageOfItems[0])
		// console.log(this.props.items[0].name, nextProps.items[0].name)
	}
	handleSort = (column) => e => {
		e.preventDefault()
		this.props.handleSort(column, this.state.sort[column])
		this.setState({
			sort: {
				...this.state.sort,
				[column]: !this.state.sort[column]
			}
		})
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
		// update state with new page of items
		// Empty Checked items
		if (this.state.pageOfItems !== pageOfItems)
			this.setState({ pageOfItems: pageOfItems, checkedItems: [] })
	}

	render() {
		return (
			<ListContainer pageSize={this.props.pageSize}>
				<div style={{ display: 'flex', flexFlow: '' }} >
					<Checkbox />
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', flex: 1 }} >
						<Label onClick={this.handleSort('name')} style={{ cursor: 'pointer' }}>
							<Text title={this.props.label}>
								Name
							</Text>
						</Label>
						<Cell onClick={this.handleSort('progress')} style={{ cursor: 'pointer' }}>
							Gennemfort
						</Cell>
						<Cell onClick={this.handleSort('date')} style={{ cursor: 'pointer' }}>
							Dato
						</Cell>
						<Responsible onClick={this.handleSort('responsible')} style={{ cursor: 'pointer' }}>
							Responsible
						</Responsible>
					</div>
				</div>
				{this.props.items.length !== 0 ? <React.Fragment>{this.state.pageOfItems.map((c, i) =>
					<ListCard
						key={i}
						id={c.id}
						resp={c.responsible}
						label={c.name}
						date={c.date.toLocaleDateString()}
						img={c.img}
						progress={c.progress}
						onChecked={this.onCheckedItem}
					/>
				)}
				<Pagination items={this.props.items} onChangePage={this.onChangePage} pageSize={this.props.pageSize} />
				</React.Fragment>
					: <div>No Items</div>}
			</ListContainer>
		)
	}
}
