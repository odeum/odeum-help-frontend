import React, { PureComponent } from 'react'
import { Label, Responsible, ListItemContainer, ExpandButtonContainer, Cell, Text } from './ListStyles'
import Icon from 'odeum-ui/lib/components/Icon/Icon'
export default class ListCard extends PureComponent {
	render() {
		return (
			<ListItemContainer>
				<Label>
					<Text title={this.props.label}>
						{this.props.label}
					</Text>
				</Label>
				<Cell>
					Gennemfort {this.props.progress}%
				</Cell>
				<Cell>
					{this.props.date}
				</Cell>
				<Responsible>
					{this.props.resp}
				</Responsible>
				<ExpandButtonContainer>
					<Icon icon={'more_vert'} iconSize={23} />
				</ExpandButtonContainer>
			</ListItemContainer>
		)
	}
}
