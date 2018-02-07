import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default class TinyMceEditor extends Component {
	handleEditorChange = (e) => {
		console.log('Content was updated:', e.target.getContent())
	}
	render() {
		return (
			<div>
				<Editor
					initialValue={'Hello World'}
					init={{
						branding: false,
						plugins: 'autolink link image lists print preview',
						toolbar: 'styleselect | bold italic | alignleft aligncenter alignright | link'
					}}
					onChange={this.handleEditorChange}
				/>
			</div>
		)
	}
}