import React from 'react'
import { stateToHTML } from 'draft-js-export-html'
import { Editor as DraftEdtor, EditorState, RichUtils, getDefaultKeyBinding, convertToRaw } from 'draft-js'

import { EditorArea } from './HelpEditorStyles'
import EditorSettings from './EditorSettings'
import { InlineStyleControls } from './EditorControls/InlineStyleControls'
import { BlockStyleControls } from './EditorControls/BlockStyleControls'
import { HeaderBlockControls } from './EditorControls/HeaderBlockControls'
import { TextAlignmentControls } from './EditorControls/TextAlignmentControls'
import ColorPicker from './EditorControls/TextColorControls'
import TextSizeControls from './EditorControls/TextSizeControls'

class Editor extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			editorState: EditorState.createEmpty(),
			edit: true
		}
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
	_mapKeyToEditorCommand = (e) => {
		console.log(e.keyCode)
		switch (e.keyCode) {
			case 17: // TAB
				const newEditorState = RichUtils.onTab(
					e,
					this.state.editorState,
					4, /* maxDepth */
				)
				if (newEditorState !== this.state.editorState) {
					this.onChange(newEditorState)
				}
				return
			case 83: // Ctrl + Shift + S
				if (e.ctrlKey && e.shiftKey)
					this.onSaveSubmit()
				// alert('Hello')
				break
			case 67:
				if (e.ctrlKey && e.altKey) { }//toggle Code
				break
			default:
				break
		}
		return getDefaultKeyBinding(e)
	}
	//#region Text Controls

	toggleFontSize = fontSize => {
		const newEditorState = EditorSettings.styles.fontSize.toggle(this.state.editorState, fontSize)

		return this.onChange(newEditorState)
	}
	toggleColor = color => {
		const newEditorState = EditorSettings.styles.color.toggle(this.state.editorState, color)

		return this.onChange(newEditorState)
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
		// console.log(this.state.editorState.toJS())
		this.onChange(
			RichUtils.toggleInlineStyle(
				this.state.editorState,
				inlineStyle
			)
		)
	}
	//#endregion

	onEditorFocus = () => {
		this.setState({ edit: false })
	}
	onEditorExit = () => {
		this.setState({ edit: true })
	}
	onSaveSubmit = () => {
		console.log(JSON.stringify((convertToRaw(this.state.editorState.getCurrentContent()))))
	}
	render() {
		const { editorState } = this.state
		const inlineStyles = EditorSettings.exporter(this.state.editorState)
		const html = stateToHTML(this.state.editorState.getCurrentContent(), { inlineStyles })
		return (
			<div className="RichEditor-root" style={{ borderRadius: '3px', border: '1px solid #ddd', display: 'flex', flexFlow: 'column nowrap' }}>
				<input placeholder="Help Title" style={{ margin: '4px', width: '300px' }} />
				<br /><label style={{ marginTop: '10px', marginLeft: '10px' }}> Help Content</label>
				<div style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center', borderRadius: '3px', marginTop: '10px', marginBottom: '10px' }}>
					<InlineStyleControls
						editorState={editorState}
						onToggle={this._toggleInlineStyle}
					/>
					<TextSizeControls
						toggleSize={this.toggleFontSize}
					/>
					<ColorPicker
						toggleColor={this.toggleColor}
					/>
					<HeaderBlockControls
						editorState={editorState}
						onToggle={this._toggleBlockType}
					/>
					<TextAlignmentControls
						editorState={editorState}
						onToggle={this._toggleInlineStyle}
					/>
					<BlockStyleControls
						editorState={editorState}
						onToggle={this._toggleBlockType}
					/>
					<button onClick={this.onSaveSubmit}>
						Save
					</button>
				</div>
				<EditorArea /* onClick={this.onEditorFocus} */ >
					<DraftEdtor
						blockRenderMap={EditorSettings.extendedBlockRenderMap}
						customStyleMap={EditorSettings.styleMap}
						customStyleFn={EditorSettings.customStyleFn}
						editorState={editorState}
						handleKeyCommand={this._handleKeyCommand}
						keyBindingFn={this._mapKeyToEditorCommand}
						onChange={this.onChange}
						placeholder=""
						ref="editor"
						spellCheck={true}
					// readOnly={this.state.edit}
					// onBlur={this.onEditorExit}
					/>
				</EditorArea>
				<div dangerouslySetInnerHTML={{ __html: html }} />
				{/* <pre>
					{JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()), null, 2)}
				</pre> */}
				<pre>
					{html}
				</pre>
			</div>
		)
	}
}

export default Editor