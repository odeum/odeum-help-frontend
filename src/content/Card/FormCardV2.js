import React, { Component } from 'react'

export default class FormCard extends Component {
	render() {
		return (
			<div style={{ display: 'flex', alignItems: 'center', flexFlow: 'column nowrap', borderRadius: '4px', border: '1px solid black', width: 250, height: 300, margin: 10, position: 'relative' }}>
				<div style={{ overflow: 'hidden', width: '100%', height: 150, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
					<img alt={'img card'} src={'https://picsum.photos/1920/1404/?random=0'} />
				</div>
				<div style={{ display: 'flex', flexFlow: 'row wrap', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
					<div style={{ margin: 4 }}>
						<div>Title</div>
						<div>Content</div>
					</div>
					<div style={{ margin: 4 }}>
						<div>Title</div>
						<div>Content</div>
					</div>
					<div style={{ margin: 4 }}>
						<div>Title</div>
						<div>Content</div>
					</div>
					<div style={{ margin: 4 }}>
						<div>Title</div>
						<div>Content</div>
					</div>
					<div style={{ margin: 4 }}>
						<div>Title</div>
						<div>Content</div>
					</div>
				</div>
				<div style={{ position: 'absolute', top: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					Controls
				</div>
			</div>
		)
	}
}
