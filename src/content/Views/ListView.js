import React, { Component } from 'react'
import ListCard from '../List/ListCard'
import Pagination from '../Pagination/Pagination'
import { ListContainer } from './ViewStyles'

export default class ListView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pageOfItems: []
		}
	}

	onChangePage = (pageOfItems) => {
		// console.log('onChangePage', pageOfItems)
		// update state with new page of items
		if (this.state.pageOfItems !== pageOfItems)
			this.setState({ pageOfItems: pageOfItems })
	}
	renderChildren = () => {
		const arr = this.props.children.map((c, i) => {
			return <ListCard
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
