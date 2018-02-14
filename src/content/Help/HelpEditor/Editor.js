import React from 'react'
import { Editor as DraftEdtor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js'
import { InlineStyleControls } from './EditorControls/InlineStyleControls'
import { BlockStyleControls } from './EditorControls/BlockStyleControls'
import { HeaderBlockControls } from './EditorControls/HeaderBlockControls'
import { EditorArea } from './HelpEditorStyles'
import { TextAlignmentControls } from './EditorControls/TextAlignmentControls'
import EditorSettings from './EditorSettings'


class Editor extends React.Component {
	constructor(props) {
		super(props)
		this.state = { editorState: EditorState.createEmpty() }
		this.onChange = (editorState) => this.setState({ editorState })
	}
	shouldComponentUpdate(nextState) {
		if (nextState !== this.state)
			return true
		else
			return false
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
		// let className = 'RichEditor-editor'
		// var contentState = editorState.getCurrentContent()
		// if (!contentState.hasText()) {
		// if (contentState.getBlockMap().first().getType() !== 'unstyled') {
		// className += ' RichEditor-hidePlaceholder'
		// }
		// }
		return (
			<div className="RichEditor-root" style={{ borderRadius: '3px', border: '1px solid #ddd', display: 'flex', flexFlow: 'column nowrap' }}>
				<input placeholder="Help Title" style={{ margin: '4px', width: '300px' }} />
				<br /><label style={{ marginTop: '10px', marginLeft: '10px' }}> Help Content</label>
				<div style={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', borderRadius: '3px', marginTop: '10px', marginBottom: '10px' }}>

					<InlineStyleControls
						editorState={editorState}
						onToggle={this._toggleInlineStyle}
					/>
					<HeaderBlockControls
						editorState={editorState}
						onToggle={this._toggleBlockType}
					/>
					<TextAlignmentControls
						editorState={editorState}
						onToggle={this._toggleBlockType}
					/>
					<BlockStyleControls
						editorState={editorState}
						onToggle={this._toggleBlockType}
					/>

				</div>
				<EditorArea onClick={this.focus}>
					<DraftEdtor
						blockRenderMap={EditorSettings.extendedBlockRenderMap}
						customStyleMap={EditorSettings.styleMap}
						editorState={editorState}
						handleKeyCommand={this._handleKeyCommand}
						keyBindingFn={this._mapKeyToEditorCommand}
						onChange={this.onChange}
						placeholder=""
						ref="editor"
						spellCheck={true}
					/>
				</EditorArea>
			</div>
		)
	}
}

export default Editor