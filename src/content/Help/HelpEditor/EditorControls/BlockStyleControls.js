import React from 'react'
import { DropdownOption } from '../EditorButton'
import { ButtonContainer } from '../HelpEditorStyles'
import Dropdown from '../DropDown'

const BLOCK_TYPES = [
	// { label: 'Blockquote', style: 'blockquote', icon: 'format_quote' },
	{ label: 'Bullets', style: 'unordered-list-item', icon: 'format_list_bullet' },
	{ label: 'Numbered List', style: 'ordered-list-item', icon: 'format_list_number' },
	// { label: 'Code Block', style: 'CODE_BLOCK', icon: 'code' },
]
export const BlockStyleControls = (props) => {
	const { editorState } = props
	const selection = editorState.getSelection()
	const blockType = editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType()
	return (
		<ButtonContainer>
			<Dropdown icon={'format_quote'} label={'Lists'}>
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