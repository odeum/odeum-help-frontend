import React, { PureComponent } from 'react'
import { Label, Responsible, ListItemContainer } from './ListStyles'
export default class ListCard extends PureComponent {
	render() {
		return (
			<ListItemContainer>
				<Label>
					{this.props.label}
				</Label>
				<div>
					{this.props.progress} %
				</div>
				<div>
					{this.props.date}
				</div>
				<Responsible>
					{this.props.resp}
				</Responsible>
			</ListItemContainer>
		)
	}
}
