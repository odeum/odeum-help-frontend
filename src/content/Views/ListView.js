import React, { PureComponent } from 'react'
import ListCard from '../List/ListCard'
import Pagination from '../Pagination/Pagination'
import { ListContainer } from './ViewStyles'

export default class ListView extends PureComponent {
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
		// console.log('onChangePage', pageOfItems)
		// update state with new page of items
		// Empty Checked items
		if (this.state.pageOfItems !== pageOfItems)
			this.setState({ pageOfItems: pageOfItems, checkedItems: [] })
	}
	renderChildren = () => {
		const arr = this.props.children.map((c, i) => {
			return <ListCard
				key={i}
				id={c.id}
				resp={c.responsible}
				label={c.name}
				date={c.date.toLocaleDateString()}
				img={c.img}
				progress={c.progress}
				onChecked={this.onCheckedItem}
			/>
		})
		return arr
	}
	render() {
		var arr = this.renderChildren()
		return (
			<ListContainer pageSize={this.props.pageSize}>
				{this.state.pageOfItems.map((item, index) =>
					<React.Fragment key={index}>{item}</React.Fragment>
				)}
				<Pagination items={arr} onChangePage={this.onChangePage} pageSize={this.props.pageSize} />

			</ListContainer>
		)
	}
}
