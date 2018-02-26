import React, { Component } from 'react'
import { CardListContainer } from '../NewCardStyles'
export default class CardList extends Component {

	render() {
		return (
			<CardListContainer>
				{React.Children.toArray(this.props.children).map((c, index) => {
					return React.cloneElement(c, { id: parseInt(index, 10), key: index })
				}
				)}
			</CardListContainer>
		)
	}
}
