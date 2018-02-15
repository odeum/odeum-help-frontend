import React from 'react'
import { Editor as DraftEdtor, EditorState, RichUtils, getDefaultKeyBinding, Modifier, convertToRaw } from 'draft-js'
import { InlineStyleControls } from './EditorControls/InlineStyleControls'
import { BlockStyleControls } from './EditorControls/BlockStyleControls'
import { HeaderBlockControls } from './EditorControls/HeaderBlockControls'
import { EditorArea } from './HelpEditorStyles'
import { TextAlignmentControls } from './EditorControls/TextAlignmentControls'
import EditorSettings from './EditorSettings'
import { stateToHTML } from 'draft-js-export-html'

var _ = require('lodash')

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
	toggleFontSize = fontSize => {
		const newEditorState = EditorSettings.styles.fontSize.toggle(this.state.editorState, fontSize)

		return this.onChange(newEditorState)
	}
	toggleColor = color => {
		const newEditorState = EditorSettings.styles.color.toggle(this.state.editorState, color)

		return this.onChange(newEditorState)
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
	_toggleInlineStyleOverride = (inlineStyle) => {
		const styles = [
			'RIGHT',
			'LEFT',
			'CENTER'
		]
		const { editorState } = this.state
		const contentWithoutStyles = _.reduce(styles, (newContentState, style) => (
			Modifier.removeInlineStyle(
				newContentState,
				editorState.getSelection(),
				style
			)
		), editorState.getCurrentContent())
		return this.onChange(EditorState.push(
			editorState,
			contentWithoutStyles,
			'change-inline-style'
		))
	}
	onEditorFocus = () => {
		this.setState({ edit: false })
	}
	onEditorExit = () => {
		this.setState({ edit: true })
	}
	onSaveSubmit = () => {
		console.log(JSON.stringify((convertToRaw(this.state.editorState.getCurrentContent()))))
		// e.preventDefault()
	}
	render() {
		const { editorState } = this.state
		const options = x => x.map(child => {
			return <option key={child} value={child}>{child}</option>
		  })
		const inlineStyles = EditorSettings.exporter(this.state.editorState)
		const html = stateToHTML(this.state.editorState.getCurrentContent(), { inlineStyles })
		return (
			<div className="RichEditor-root" style={{ borderRadius: '3px', border: '1px solid #ddd', display: 'flex', flexFlow: 'column nowrap' }}>
				<input placeholder="Help Title" style={{ margin: '4px', width: '300px' }} />
				<br /><label style={{ marginTop: '10px', marginLeft: '10px' }}> Help Content</label>
				<div style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center', borderRadius: '3px', marginTop: '10px', marginBottom: '10px' }}>
					<select onChange={e => this.toggleFontSize(e.target.value)}>
						{options(['12px', '24px', '36px', '50px', '72px'])}
					</select>
					<select onChange={e => this.toggleColor(e.target.value)}>
						{options(['red', 'blue', 'green'])}
					</select>
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
				<EditorArea onClick={this.onEditorFocus} >
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
						readOnly={this.state.edit}
						onBlur={this.onEditorExit}
					/>
				</EditorArea>
				<div dangerouslySetInnerHTML={{ __html: html }} />
				<pre>
					{JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()), null, 2)}
				</pre>
			</div>
		)
	}
}

export default Editor