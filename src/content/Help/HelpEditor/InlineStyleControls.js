import React from 'react'
import EditorButton from './EditorButton'
import { ButtonContainer } from './HelpEditorStyles'
// import { Icon } from 'odeum-ui'
var INLINE_STYLES = [
	{ label: 'Bold', style: 'BOLD' },
	{ label: 'Italic', style: 'ITALIC' },
	{ label: 'Underline', style: 'UNDERLINE' },
	{ label: 'Code', style: 'CODE' },
	{ label: 'AT', style: 'ATOMIC' }
	//tied to styleMap
]
export const InlineStyleControls = (props) => {
	var currentStyle = props.editorState.getCurrentInlineStyle()
	return (
		<React.Fragment>
			<ButtonContainer>
				{INLINE_STYLES.map(type =>
					<EditorButton
						key={type.label}
						active={currentStyle.has(type.style)}
						label={type.label}
						onToggle={props.onToggle}
						style={type.style}
					/>
				)}
			</ButtonContainer>
		</React.Fragment>
	)
}