import React, { PureComponent } from 'react'
import { OptionButton } from './HelpEditorStyles'

class EditorButton extends PureComponent {

	onToggle = (e) => {
		e.preventDefault()
		this.props.onToggle(this.props.style)
	}
	render() {
		return (
			<OptionButton active={this.props.active} onMouseDown={this.onToggle}>
				{this.props.label}
			</OptionButton>
		)
	}
}

export default EditorButton