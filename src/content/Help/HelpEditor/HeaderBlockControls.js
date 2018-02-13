import React from 'react'
import EditorButton from './EditorButton'
import { ButtonContainer } from './HelpEditorStyles'
import Dropdown from './DropDown'
const BLOCK_TYPES = [
	{ label: 'Header 1', style: 'header-one' },
	{ label: 'Header 2', style: 'header-two' },
	{ label: 'Header 3', style: 'header-three' },
	{ label: 'Header 4', style: 'header-four' },
	{ label: 'Header 5', style: 'header-five' },
	{ label: 'Header 6', style: 'header-six' }
	// { label: 'Blockquote', style: 'blockquote' },
	// { label: 'UL', style: 'unordered-list-item' },
	// { label: 'OL', style: 'ordered-list-item' },
	// { label: 'Code Block', style: 'code-block' },
]
export const HeaderBlockControls = (props) => {
	const { editorState } = props
	const selection = editorState.getSelection()
	const blockType = editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType()
	return (
		<div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}>
			{/* <label style={{ lineHeight: '15px', color: '#aaa' }}>
				Headers
			</label> */}
			<ButtonContainer>
				<Dropdown icon={'format_header'} label={"Headers"}>

					{BLOCK_TYPES.map((type) =>
						<EditorButton
							key={type.label}
							active={type.style === blockType}
							label={type.label}
							onToggle={props.onToggle}
							style={type.style}
						/>
					)}
				</Dropdown>
			</ButtonContainer>
		</div>
	)
}