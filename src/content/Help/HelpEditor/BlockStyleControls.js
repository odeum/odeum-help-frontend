import React from 'react'
import EditorButton from './EditorButton'
import { ButtonContainer } from './HelpEditorStyles'
import Dropdown from './DropDown.js'

const BLOCK_TYPES = [
	{ label: 'Blockquote', style: 'blockquote', icon: 'format_quote' },
	{ label: 'UL', style: 'unordered-list-item', icon: 'format_list_bullet' },
	{ label: 'OL', style: 'ordered-list-item', icon: 'format_list_number' },
	{ label: 'Code Block', style: 'code-block', icon: 'code' },
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
			<Dropdown icon={'format_quote'} label={'Lists & Blocks/Quotes'}>
				{BLOCK_TYPES.map((type) =>
					<EditorButton
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