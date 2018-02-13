import React, { Component } from 'react'
// import RTE from './Editor/RTE'
import Editor from './HelpEditor/Editor'
// import TinyMCE from './Editor/TinyMCE'
export default class HelpForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			appId: this.props.appId,
			helpTitle: '',
			helpContent: ''
		}
	}
	shouldComponentUpdate(nextState) {
		if (this.state.helpContent !== nextState.helpContent)
			return true
		else
			return false
	}
	getContent = (content) => {
		this.setState({ helpContent: content })
	}
	RawHTML = ({ children, className = "" }) =>
		<div className={className}
			dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />') }} />
	render() {
		return (
			<div style={{ display: 'flex', height: '100%', width: '100%', flexFlow: 'column' }}>
				{/* <input /> */}
				{/* <RTE onChange={this.getContent} /> */}
				<Editor style={{ border: '1px solid black', borderRadius: '5px' }} />
				<this.RawHTML>
					{this.state.helpContent}
				</this.RawHTML>
				{/* <TinyMCE value={this.state.helpContent}/> */}
			</div>
		)
	}
}
