import React from 'react'
import { DropdownOption } from '../EditorButton'
import { ButtonContainer } from '../HelpEditorStyles'
import Dropdown from '../DropDown'

const BLOCK_TYPES = [
	{ label: 'Header 1', style: 'header-one', size: 32 },
	{ label: 'Header 2', style: 'header-two', size: 24 },
	{ label: 'Header 3', style: 'header-three', size: 18 },
	{ label: 'Header 4', style: 'header-four', size: 15 }
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
			<ButtonContainer>
				<Dropdown icon={'format_header'} label={"Headers"}>
					{BLOCK_TYPES.map((type) =>
						<DropdownOption
							key={type.label}
							active={type.style === blockType}
							label={type.label}
							onToggle={props.onToggle}
							style={type.style}
							size={type.size}
							icon={'format_header'}
						/>
					)}
				</Dropdown>
			</ButtonContainer>
		</div>
	)
}