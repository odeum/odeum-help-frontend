import React from 'react'
import { /* DropdownOption,  */InlineButton } from '../EditorButton'
import { ButtonContainer } from '../HelpEditorStyles'
// import Dropdown from '../DropDown.js'

const BLOCK_TYPES = [
	{ label: 'Left', style: 'LEFT', icon: 'format_align_left' },
	{ label: 'Center', style: 'CENTER', icon: 'format_align_center' },
	{ label: 'Right', style: 'RIGHT', icon: 'format_align_right' }
]

export class TextAlignmentControls extends React.Component {

	render() {
		// const { editorState } = this.props
		const { props } = this
		// const selection = editorState.getSelection()
		// const blockType = editorState
		// 	.getCurrentContent()
		// 	.getBlockForKey(selection.getStartKey())
		// 	.getType()
		var currentStyle = props.editorState.getCurrentInlineStyle()
		// console.log(currentStyle.toJS())
		return (
			<ButtonContainer>
				{/* <Dropdown icon={'format_align_justify'} label={'Align Text'}> */}
				{BLOCK_TYPES.map((type) =>
					<InlineButton
						key={type.label}
						active={currentStyle.has(type.style)}
						label={type.label}
						onToggle={props.onToggle}
						style={type.style}
						icon={type.icon}
					/>
				)}
				{/* </Dropdown> */}
			</ButtonContainer>
		)
	}
}