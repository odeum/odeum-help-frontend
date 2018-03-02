import React, { PureComponent } from 'react'
import { Label, Responsible, ListItemContainer, ExpandButtonContainer, Cell, Text, ListCardItem, Button, ButtonContainer, ControlsContainer } from './ListStyles'
import Icon from 'odeum-ui/lib/components/Icon/Icon'
import Checkbox from '../Views/Components/CheckBox'
export default class ListCard extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			expand: false,
			checked: false
		}
	}

	onExpand = () => {
		this.setState({ expand: !this.state.expand })
	}
	onChecked = (isChecked) => {
		this.props.onChecked(this.props.id, isChecked)
		this.setState({ checked: !this.state.checked })
	}
	render() {
		return (
			<ListCardItem>
				<Checkbox onChange={this.onChecked} />
				<ListItemContainer selected={this.state.checked}>
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

					<ControlsContainer>
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
						<ExpandButtonContainer selected={this.state.checked} onClick={this.onExpand}>
							<Icon icon={'more_vert'} color={'#FFF'} active={this.state.checked} iconSize={23} />
						</ExpandButtonContainer>
					</ControlsContainer>
				</ListItemContainer>
			</ListCardItem>
		)
	}
}
