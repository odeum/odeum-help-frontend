import React, { Component } from 'react'
import { CardListContainer } from '../NewCardStyles'
import Pagination from '../../Pagination/Pagination'
export default class CardList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pageOfItems: []
		}
	}

	onChangePage = (pageOfItems) => {
		// update state with new page of items
		this.setState({ pageOfItems: pageOfItems })
	}
	render() {
		return (
			<React.Fragment>
				<CardListContainer>
					{this.state.pageOfItems.map((item, index) =>
						<React.Fragment key={index}>{item}</React.Fragment>
					)}

				</CardListContainer>
				<Pagination items={this.props.children} onChangePage={this.onChangePage} pageSize={this.props.pageSize}/>
			</React.Fragment>
		)
	}
}
