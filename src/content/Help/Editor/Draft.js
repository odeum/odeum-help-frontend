import React from 'react'
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js'

class MyEditor extends React.Component {
	constructor(props) {
		super(props)
		this.state = { editorState: EditorState.createEmpty() }
		this.onChange = (editorState) => this.setState({ editorState })
	}

	_handleKeyCommand(command, editorState) {
		const newState = RichUtils.handleKeyCommand(editorState, command)
		if (newState) {
			this.onChange(newState)
			return true
		}
		return false
	}
	_mapKeyToEditorCommand(e) {
		switch (e.keyCode) {
			case 9: // TAB
				const newEditorState = RichUtils.onTab(
					e,
					this.state.editorState,
					4, /* maxDepth */
				)
				if (newEditorState !== this.state.editorState) {
					this.onChange(newEditorState)
				}
				return
			default:
				break
		}
		return getDefaultKeyBinding(e)
	}
	_toggleBlockType = (blockType) => {
		this.onChange(
			RichUtils.toggleBlockType(
				this.state.editorState,
				blockType
			)
		)
	}
	_toggleInlineStyle = (inlineStyle) => {
		this.onChange(
			RichUtils.toggleInlineStyle(
				this.state.editorState,
				inlineStyle
			)
		)
	}
	render() {
		const { editorState } = this.state
		// If the user changes block type before entering any text, we can
		// either style the placeholder or hide it. Let's just hide it now.
		let className = 'RichEditor-editor'
		var contentState = editorState.getCurrentContent()
		if (!contentState.hasText()) {
			if (contentState.getBlockMap().first().getType() !== 'unstyled') {
				className += ' RichEditor-hidePlaceholder'
			}
		}
		return (
			<div className="RichEditor-root">
				<BlockStyleControls
					editorState={editorState}
					onToggle={this._toggleBlockType}
				/>
				<InlineStyleControls
					editorState={editorState}
					onToggle={this._toggleInlineStyle}
				/>
				<div className={className} onClick={this.focus}>
					<Editor
						blockStyleFn={getBlockStyle}
						customStyleMap={styleMap}
						editorState={editorState}
						handleKeyCommand={this._handleKeyCommand}
						keyBindingFn={this._mapKeyToEditorCommand}
						onChange={this.onChange}
						placeholder="Tell a story..."
						ref="editor"
						spellCheck={true}
					/>
				</div>
			</div>
		)
	}
}
// this is custom Styling buttons, this is what we need badly
const styleMap = {
	BOLD: {
		fontWeight: 700,
	},
	CODE: {
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
		fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
		fontSize: 40,
		padding: 2,
	},
}
function getBlockStyle(block) {
	switch (block.getType()) {
		case 'blockquote': return 'RichEditor-blockquote'
		default: return null
	}
}
// Move to a New class

class StyleButton extends React.Component {
	constructor() {
		super()
		this.onToggle = (e) => {
			e.preventDefault()
			this.props.onToggle(this.props.style)
		}
	}
	render() {
		let className = 'RichEditor-styleButton'
		if (this.props.active) {
			className += ' RichEditor-activeButton'
		}
		return (
			<span style={{ border: '1px solid black', borderRadius: '3px', padding: '3px', margin: '0px 1px' }} className={className} onMouseDown={this.onToggle}>
				{this.props.label}
			</span>
		)
	}
}

//Move to a new class

const BLOCK_TYPES = [
	{ label: 'H1', style: 'header-one' },
	{ label: 'H2', style: 'header-two' },
	{ label: 'H3', style: 'header-three' },
	{ label: 'H4', style: 'header-four' },
	{ label: 'H5', style: 'header-five' },
	{ label: 'H6', style: 'header-six' },
	{ label: 'Blockquote', style: 'blockquote' },
	{ label: 'UL', style: 'unordered-list-item' },
	{ label: 'OL', style: 'ordered-list-item' },
	{ label: 'Code Block', style: 'code-block' },
]
const BlockStyleControls = (props) => {
	const { editorState } = props
	const selection = editorState.getSelection()
	const blockType = editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType()
	return (
		<div className="RichEditor-controls" style={{ display: 'flex', flexFlow: 'row nowrap', margin: '3px' }}>
			{BLOCK_TYPES.map((type) =>
				<StyleButton
					key={type.label}
					active={type.style === blockType}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				/>
			)}
		</div>
	)
}
//Move to a new class

var INLINE_STYLES = [
	{ label: 'Bold', style: 'BOLD' },
	{ label: 'Italic', style: 'ITALIC' },
	{ label: 'Underline', style: 'UNDERLINE' },
	{ label: 'Monospace', style: 'CODE' }, //tied to styleMap
]
const InlineStyleControls = (props) => {
	var currentStyle = props.editorState.getCurrentInlineStyle()
	return (
		<div className="RichEditor-controls" style={{ display: 'flex', flexFlow: 'row nowrap', margin: '3px' }}>
			{INLINE_STYLES.map(type =>
				<StyleButton
					key={type.label}
					active={currentStyle.has(type.style)}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				/>
			)}
		</div>
	)
}
export default MyEditor