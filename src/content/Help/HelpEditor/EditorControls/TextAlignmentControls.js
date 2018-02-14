import React from 'react'
import { DropdownOption } from '../EditorButton'
import { ButtonContainer } from '../HelpEditorStyles'
import Dropdown from '../DropDown.js'

const BLOCK_TYPES = [
	{ label: 'Left', style: 'LEFT', icon: 'format_align_left' },
	{ label: 'Center', style: 'CENTER', icon: 'format_align_center' },
	{ label: 'Right', style: 'RIGHT', icon: 'format_align_right' },
]
export const TextAlignmentControls = (props) => {
	const { editorState } = props
	const selection = editorState.getSelection()
	const blockType = editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType()
	// var currentStyle = props.editorState.getCurrentInlineStyle()
	console.log(blockType)
	return (
		<ButtonContainer>
			<Dropdown icon={'format_align_justify'} label={'Align Text'}>
				{BLOCK_TYPES.map((type) =>
					<DropdownOption
						key={type.label}
						active={type.style === blockType}
						label={type.label}
						onToggle={props.onToggle}
						style={type.style}
						icon={type.icon}
					/>
				)}
			</Dropdown>
		</ButtonContainer>
	)
}