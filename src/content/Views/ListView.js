import React, { Component } from 'react'
import ListCard from '../List/ListCard'
import Pagination from '../Pagination/Pagination'
import { ListContainer } from './ViewStyles'

export default class ListView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pageOfItems: [],
			checkedItems: []
		}
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
				<Pagination items={this.props.items} onChangePage={this.onChangePage} pageSize={this.props.pageSize} /></React.Fragment>
					: <div>No Items</div>}
			</ListContainer>
		)
	}
}
