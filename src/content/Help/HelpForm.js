import React, { Component } from 'react'
// import Draft from './Editor/Draft'
import TinyMCE from './Editor/TinyMCE'
export default class HelpForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			appId: this.props.appId,
			helpTitle: '',
			helpContent: ''
		}
	}
	getContent = (content) => {
		this.setState({ helpContent: content })
	}
	RawHTML = ({ children, className = "" }) =>
		<div className={className}
			dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />') }} />
	render() {
		return (
			<div>
				<input />
				{/* <Draft onChange={this.getContent}/> */}
				<this.RawHTML>
					{this.state.helpContent}
				</this.RawHTML>
				<TinyMCE value={this.state.helpContent}/>
			</div>
		)
	}
}
