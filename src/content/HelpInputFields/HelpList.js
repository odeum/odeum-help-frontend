import React, { Component } from 'react'
import { getAllHelpItems } from './HelpData'

export default class HelpList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: null
		}
	}
	async componentDidMount() {
		var getData = await getAllHelpItems()
		if (getData !== null) {
			this.setState({ data: getData })
		}
	}

	renderHelpItems = (data) => {
		return (
			<table width="400px">
				<tbody>
					<tr>
						<th>Label</th>
						<th>Languages</th>
						<th>Help Content Count</th>
					</tr>
					{Object.entries(data).map((c, i) => {
						return <tr key={i} style={{ textAlign: 'center' }}>
							<td id="Label">{c[1].label}</td>
							<td id="Languages">{Object.keys(c[1].localeContents).map((lang, li) => <span key={li}>{lang}{' '}</span>)}</td>
							<td>{Object.entries(c[1].localeContents).map((cl, li) =>
								<span key={li}>
									{cl[0]}{':'}{cl[1].helpContents.length}{' '}
								</span>
							)}</td>
						</tr>
					})}
				</tbody>
			</table>
		)
	}


	render() {
		const { data } = this.state
		return (
			<div style={{ display: 'flex' }}>
				{data ? this.renderHelpItems(data) : <div>Loading</div>}
			</div>
		)
	}
}
