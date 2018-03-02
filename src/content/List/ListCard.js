import React, { PureComponent } from 'react'
import { Label, Responsible, ListItemContainer, ExpandButtonContainer, Cell, Text, ListCardItem, Button, ButtonContainer } from './ListStyles'
import Icon from 'odeum-ui/lib/components/Icon/Icon'
import Checkbox from '../Views/Components/CheckBox'
export default class ListCard extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			expand: false
		}
	}
	onExpand = () => {
		this.setState({ expand: !this.state.expand })
	}
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
					<div style={{ display: 'flex', flexFlow: 'row nowrap', justifySelf: 'end', justifyContent: 'right' }}>
						<ButtonContainer horizOpen={this.state.expand} style={{ flexFlow: 'row nowrap' }}>
							<Button horizOpen={this.state.expand} onClick={this.handleExpand}>
								<Icon color={'#5E5E5E'} icon={'mode_edit'} iconSize={23} />
							</Button>
							<Button horizOpen={this.state.expand}>
								<Icon color={'#5E5E5E'} icon={'share'} iconSize={23} />
							</Button>
							<Button horizOpen={this.state.expand}>
								<Icon color={'#5E5E5E'} icon={'library_add'} iconSize={23} />
							</Button>
						</ButtonContainer>
						<ExpandButtonContainer onClick={this.onExpand}>
							<Icon icon={'more_vert'} iconSize={23} />
						</ExpandButtonContainer>
					</div>
				</ListItemContainer>
			</ListCardItem>
		)
	}
}
