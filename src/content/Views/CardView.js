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
		return this.props.children ? this.props.children.map((c, i) => {
			return <NewFormCard
				key={i}
				resp={c.responsible}
				label={c.name}
				date={c.date.toLocaleDateString()}
			/>
		}) : null
	}
	onChangePage = (pageOfItems) => {
		// update state with new page of items
		this.setState({ pageOfItems: pageOfItems })
	}
	render() {
		return (
			<React.Fragment>
				<CardListContainer pageSize={this.props.pageSize}>
					{this.state.pageOfItems.map((item, index) =>
						<React.Fragment key={index}>{item}</React.Fragment>
					)}

				</CardListContainer>
				<Pagination items={this.renderChildren()} onChangePage={this.onChangePage} pageSize={this.props.pageSize} />
			</React.Fragment>
		)
	}
}