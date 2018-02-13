import React from 'react'
// import EditorButton from './EditorButton'
import { ButtonContainer, SingleOptionButton } from './HelpEditorStyles'
import { Icon } from 'odeum-ui'
var INLINE_STYLES = [
	{ label: 'Bold', style: 'BOLD', icon: 'format_bold' },
	{ label: 'Italic', style: 'ITALIC', icon: 'format_italic' },
	{ label: 'Underline', style: 'UNDERLINE', icon: 'format_underline' },
	{ label: 'Code', style: 'CODE', icon: 'code' },
	{ label: 'Atomic', style: 'ATOMIC', icon: 'star' }
	//tied to styleMap
]
export const InlineStyleControls = (props) => {
	var currentStyle = props.editorState.getCurrentInlineStyle()
	return (
		<React.Fragment>
			<ButtonContainer>
				{INLINE_STYLES.map(type =>
					<InlineButton
						key={type.label}
						active={currentStyle.has(type.style)}
						label={type.label}
						onToggle={props.onToggle}
						style={type.style}
						icon={type.icon}
						size={28}
					/>
				)}
			</ButtonContainer>
		</React.Fragment>
	)
}


const InlineButton = (props) => {
	const onToggle = (e) => {
		e.preventDefault()
		props.onToggle(props.style)
	}
	return (
		<SingleOptionButton size={props.size} active={props.active} onMouseDown={onToggle}>
			<Icon icon={props.icon} iconSize={props.size ? props.size : '24'} active={true} color={'#fff'} />{props.label}
		</SingleOptionButton>
	)
}

// export default componentName
