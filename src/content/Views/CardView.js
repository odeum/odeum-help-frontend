import React, { Component } from 'react'
import { CardListContainer } from './ViewStyles'
import Pagination from '../Pagination/Pagination'
import NewFormCard from '../Card/NewCard'

export default class CardView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pageOfItems: []
		}
	}
	renderChildren = () => {
		const arr = this.props.children.map((c, i) => {
			return <NewFormCard
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
	onChangePage = (pageOfItems) => {
		// console.log('onChangePage', pageOfItems)
		// update state with new page of items
		if (this.state.pageOfItems !== pageOfItems)
			this.setState({ pageOfItems: pageOfItems })
	}
	render() {
		// console.log('CardView', this.props.pageSize)
		const arr = this.renderChildren()
		return (
			<React.Fragment>
				<CardListContainer pageSize={this.props.pageSize}>
					{this.state.pageOfItems.map((item, index) =>
						<React.Fragment key={index}>{item}</React.Fragment>
					)}

				</CardListContainer>
				<Pagination items={arr} onChangePage={this.onChangePage} pageSize={this.props.pageSize} />
			</React.Fragment>
		)
	}
}