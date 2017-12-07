import React, { Component } from 'react'
import { ButtonPanel, Button } from 'odeum-ui'
import { DoublePanel, InputGreen, Panel } from './HelpStyles'
export default class HelpNew extends Component {
	constructor(props) {
		super(props)

		this.state = {
			locale_content: {
				en: {
					helptitle: '',
					helpdescription: '',
					help_content: {
						text: '',
						image: '',
						video: '',
						link: '',
						svg: '',
						pdf: '',
						document: ''
					}
				},
				da: {
					helptitle: '',
					helpdescription: '',
					help_content: {
						text: '',
						image: '',
						video: '',
						link: '',
						svg: '',
						pdf: '',
						document: ''
					}
				}
			}
		}
	}

	handleResetInput = (fields) => {
		// if arg(fields) { this.setState({ fields, ... }) }
		this.setState({
			locale_content: {
				en: {
					helptitle: '',
					helpdescription: '',
					help_content: {
						text: '',
						image: '',
						video: '',
						link: '',
						svg: '',
						pdf: '',
						document: ''
					}
				},
				da: {
					helptitle: '',
					helpdescription: '',
					help_content: {
						text: '',
						image: '',
						video: '',
						link: '',
						svg: '',
						pdf: '',
						document: ''
					}
				}
			}
		})
	}

	handleContentChange = (e) => {
		this.setState({
			locale_content: {
				...this.state.locale_content,
				[e.target.lang]: {
					...this.state.locale_content[e.target.lang],
					help_content: {
						...this.state.locale_content[e.target.lang].help_content,
						[e.target.name]: e.target.value
					}
				}
			}
		})
	}
	/* For Title and Description */
	handleChange = (e) => {

		this.setState({
			locale_content: {
				...this.state.locale_content,
				[e.target.lang]: {
					...this.state.locale_content[e.target.lang],
					[e.target.name]: e.target.value
				}
			}

		})
	}
	render() {
		const { en, da } = this.state.locale_content

		return (
			<DoublePanel>
				{/* Start DA */}
				<Panel>
					<form>
						<div>Dansk</div>
						<InputGreen placeholder={'Hjælpe titel'} value={da.helptitle} name={'helptitle'} onChange={this.handleChange} lang={'da'} />
						<InputGreen placeholder={'Beskrivelse'} value={da.helpdescription} name={'helpdescription'} onChange={this.handleChange} lang={'da'} />
						<InputGreen placeholder={'Tekst'} value={da.help_content.text} name={'text'} onChange={this.handleContentChange} lang={'da'} />
						<InputGreen placeholder={'Billede'} value={da.help_content.image} name={'image'} onChange={this.handleContentChange} lang={'da'} />
						<InputGreen placeholder={'Link'} value={da.help_content.link} name={'link'} onChange={this.handleContentChange} lang={'da'} />
						<InputGreen placeholder={'Video'} value={da.help_content.video} name={'video'} onChange={this.handleContentChange} lang={'da'} />
						<InputGreen placeholder={'SVG'} value={da.help_content.svg} name={'svg'} onChange={this.handleContentChange} lang={'da'} />
						<InputGreen placeholder={'PDF'} value={da.help_content.pdf} name={'pdf'} onChange={this.handleContentChange} lang={'da'} />
						<InputGreen placeholder={'Dokument'} value={da.help_content.document} name={'document'} onChange={this.handleContentChange} lang={'da'} />
						<ButtonPanel justify={'left'} >
						
							<Button
								label={'Save'}
								icon={'check'}
								type={'submit'}
								onClick={this.handleSubmit}
								disabled={!this.state.formValid}
								isDisabled={!this.state.formValid}
								color={this.state.formValid ? '#13A085' : ''}
								onSubmit={this.handleOnSubmit}
							/>
						
							<Button
								label={'Reset'}
								icon={'close'}
								type={'reset'}
								onClick={this.handleResetInput}
								color={'#BE4F44'}
							/>
						
						</ButtonPanel>
					</form>
				</Panel>
				{/* End DA */}
				{/* Start EN */}
				<Panel>
					<form>
						<div>English</div>
						<InputGreen placeholder={'Help title'} value={en.helptitle} name={'helptitle'} onChange={this.handleChange} lang={'en'} />
						<InputGreen placeholder={'Description'} value={en.helpdescription} name={'helpdescription'} onChange={this.handleChange} lang={'en'} />
						<InputGreen placeholder={'Text'} value={en.help_content.text} name={'text'} onChange={this.handleContentChange} lang={'en'} />
						<InputGreen placeholder={'Image'} value={en.help_content.image} name={'image'} onChange={this.handleContentChange} lang={'en'} />
						<InputGreen placeholder={'Link'} value={en.help_content.link} name={'link'} onChange={this.handleContentChange} lang={'en'} />
						<InputGreen placeholder={'Video'} value={en.help_content.video} name={'video'} onChange={this.handleContentChange} lang={'en'} />
						<InputGreen placeholder={'SVG'} value={en.help_content.svg} name={'svg'} onChange={this.handleContentChange} lang={'en'} />
						<InputGreen placeholder={'PDF'} value={en.help_content.pdf} name={'pdf'} onChange={this.handleContentChange} lang={'en'} />
						<InputGreen placeholder={'Document'} value={en.help_content.document} name={'document'} onChange={this.handleContentChange} lang={'en'} />
					</form>
					<ButtonPanel justify={'left'} >
					
						<Button
							label={'Save'}
							icon={'check'}
							type={'submit'}
							onClick={this.handleSubmit}
							disabled={!this.state.formValid}
							isDisabled={!this.state.formValid}
							color={this.state.formValid ? '#13A085' : ''}
							onSubmit={this.handleOnSubmit}
						/>
					
						<Button
							label={'Reset'}
							icon={'close'}
							type={'reset'}
							onClick={this.handleResetInput}
							color={'#BE4F44'}
						/>
					
					</ButtonPanel>
				</Panel>
				{/* End EN */}
			</DoublePanel>
		)
	}
}
