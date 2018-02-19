import React, { Component } from 'react'
import { CardListContainer } from '../NewCardStyles'
export default class CardList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active: -1
		}
	}
	handleExpand = (id) => {
		this.setState({ active: id })
	}
	render() {
		return (
			<CardListContainer active={this.state.active}>
				{React.Children.toArray(this.props.children).map((c, index) => {
					return React.cloneElement(c, { id: parseInt(index, 10), key: index, handleExpand: this.handleExpand, active: this.state.active })
				}
				)}
			</CardListContainer>
		)
	}
}
