import React, { PureComponent } from 'react'
import { OptionButton } from './HelpEditorStyles'
import { Icon } from 'odeum-ui'

class EditorButton extends PureComponent {

	onToggle = (e) => {
		e.preventDefault()
		this.props.onToggle(this.props.style)
	}
	render() {
		return (
			<OptionButton size={this.props.size} active={this.props.active} onMouseDown={this.onToggle}>
				<Icon icon={this.props.icon} iconSize={this.props.size ? this.props.size : '24' } active={true} color={'#fff'} />{this.props.label}
			</OptionButton>
		)
	}
}

export default EditorButton