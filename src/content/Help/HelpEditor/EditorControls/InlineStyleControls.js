import React from 'react'
// import EditorButton from './EditorButton'
import { ButtonContainer } from '../HelpEditorStyles'
import { InlineButton } from '../EditorButton'

var INLINE_STYLES = [
	{ label: 'Bold', style: 'BOLD', icon: 'format_bold' },
	{ label: 'Italic', style: 'ITALIC', icon: 'format_italic' },
	{ label: 'Underline', style: 'UNDERLINE', icon: 'format_underline' },
	{ label: 'Code', style: 'CODE', icon: 'code' },
	// { label: 'Atomic', style: 'ATOMIC', icon: 'star' },
	// { label: 'Align Right', style: 'ALIGN_LEFT', icon: 'code' }
	//tied to styleMap
]
export const InlineStyleControls = (props) => {
	var currentStyle = props.editorState.getCurrentInlineStyle()
	return (
		<ButtonContainer>
			{INLINE_STYLES.map(type =>
				<InlineButton
					key={type.label}
					active={currentStyle.has(type.style)}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
					icon={type.icon}
					size={20}
				/>
			)}
		</ButtonContainer>
	)
}



// export default componentName
