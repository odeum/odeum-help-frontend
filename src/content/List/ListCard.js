import React, { PureComponent } from 'react'
import { Label, Responsible, ListItemContainer, ExpandButtonContainer, Cell, Text, ListCardItem } from './ListStyles'
import Icon from 'odeum-ui/lib/components/Icon/Icon'
import Checkbox from '../Views/Components/CheckBox'
export default class ListCard extends PureComponent {
	onChecked = (isChecked) => {
		this.props.onChecked(this.props.id, isChecked)
	}
	render() {
		return (
			<ListCardItem>
				<Checkbox onChange={this.onChecked} style={{ marginBottom: 0, padding: 13, margin: 3 }} />
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
			</ListCardItem>
		)
	}
}
