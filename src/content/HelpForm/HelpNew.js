import React, { Component } from 'react'
import { ButtonPanel, Button } from 'odeum-ui'

import { /* HelpContent,  */HelpTitle, HelpDescription, Text, Image, Video, Link, SVG, PDF, Document } from './HelpStyles'
import HelpErrors from './HelpErrors'

class HelpNew extends Component {

	constructor(props) {
		super(props)

		this.state = {
			locale_content: {
				en: {
					helptitle: 'title',
					helpdescription: 'test123',
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
			},
			helpErrors: {
				helptitleValid: '',
				helpdescriptionValid: '', help_contentValid: '', textValid: '', imageValid: '',
				videoValid: '', linkValid: '', svgValid: '', pdfValid: '', documentValid: ''
			},
			helptitleValid: false,
			helpdescriptionValid: false,
			help_contentValid: false,
			textValid: false,
			imageValid: false,
			videoValid: false,
			linkValid: false,
			svgValid: false,
			pdfValid: false,
			documentValid: false,
			helpValid: false
		}
	}

	handleResetInput = () => {
		this.setState({
			helptitle: '',
			helpdescription: '',
			help_content: '',
			text: '',
			image: '',
			video: '',
			link: '',
			svg: '',
			pdf: '',
			document: '',
			helpErrors: {
				helptitle: '',
				helpdescription: '', help_content: '', text: '', image: '',
				video: '', link: '', svg: '', pdf: '', document: ''
			},
			helptitleValid: false,
			helpdescriptionValid: false,
			help_contentValid: false,
			textValid: false,
			imageValid: false,
			videoValid: false,
			linkValid: false,
			svgValid: false,
			pdfValid: false,
			documentValid: false,
			helpValid: false
		})
	}

	handleUserInput = (e) => {
		const name = e.target.name
		const value = e.target.value
		this.setState({ [name]: value },
			() => { this.validateField(name, value) })
	}

	handleSubmit = (e) => {
		// alert('Your mail address is: ' + this.state.email + ' and your password is: ********')
		//TODO
		alert('Your help title is: ' + this.state.helptitle)
		e.preventDefault()
		this.props.onSubmit()
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.helpErrors
		// let emailValid = this.state.emailValid
		// let passwordValid = this.state.passwordValid
		let helptitleValid = this.state.helptitleValid
		let helpdescriptionValid = this.state.helpdescriptionValid
		let textValid = this.state.textValid
		let imageValid = this.state.imageValid
		let videoValid = this.state.videoValid
		let linkValid = this.state.linkValid
		let svgValid = this.state.svgValid
		let pdfValid = this.state.pdfValid
		let documentValid = this.state.documentValid

		switch (fieldName) {
			case 'helptitle':
				helptitleValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
				fieldValidationErrors.helptitle = helptitleValid ? '' : ' is invalid'
				break
			case 'helpdescription':
				helpdescriptionValid = value.length >= 8
				fieldValidationErrors.password = helpdescriptionValid ? '' : ' is too short'
				break
			default:
				break
		}

		this.setState({
			helpErrors: fieldValidationErrors,
			helptitleValid: helptitleValid,
			helpdescriptionValid: helpdescriptionValid,
			textValid: textValid,
			imageValid: imageValid,
			videoValid: videoValid,
			linkValid: linkValid,
			svgValid: svgValid,
			pdfValid: pdfValid,
			documentValid: documentValid
		}, this.validateHelp)
	}

	validateHelp() {
		this.setState({ helpValid: this.state.helptitleValid && this.state.descriptionValid })
	}

	errorClass(error) {
		return (error.length === 0 ? '' : 'has-error')
		// return (error.length === 0 ? false : true)
	}

	inputError(error) {
		console.log(error)
		return (error.length === 0 ? false : true)
	}

	createRef = (input) => {
		this.textInput = input
	}

	focusTextInput = () => {
		this.textInput.focus()
	}

	componentDidMount() {
		this.handleResetInput()
		this.focusTextInput()
	}

	render() {
		const { helptitle, helpdescription, help_content, } = this.state.locale_content.en
		const { text, image, video, link, svg, pdf, document } = this.state.locale_content.en.help_content
		return (
			<div>
				<form autoComplete={'no'} >
					<h1>Create New Help Item</h1>

					<div>
						<div>
							<HelpTitle
								type={helptitle}
								placeholder={'Help title'}
								name={'helptitle'}
								value={this.state.helptitle}
								onChange={this.handleUserInput}
								innerRef={this.createRef}
								color={this.inputError(helptitle) ? '#BE4F44' : undefined}
								focusColor={!this.state.helptitleValid ? '#BE4F44' : undefined}
							/>
						</div>
						<div>
							<HelpDescription
								type={helpdescription}
								placeholder={'Help description'}
								name={'helpdescription'}
								value={this.state.help_item}
								onChange={this.handleUserInput}
								innerRef={this.createRef}
								color={this.inputError(helpdescription) ? '#BE4F44' : undefined}
								focusColor={!this.state.helpdescriptionValid ? '#BE4F44' : undefined}
							/>
						</div>
						<div>
							<div>
								<Text
									type={text}
									placeholder={'Text'}
									name={'text'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(text) ? '#BE4F44' : undefined}
									focusColor={!this.state.textValid ? '#BE4F44' : undefined}
								/>
								<Image
									type={image}
									placeholder={'Image'}
									name={'image'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(image) ? '#BE4F44' : undefined}
									focusColor={!this.state.imageValid ? '#BE4F44' : undefined}
								/>
								<Video
									type={video}
									placeholder={'Video'}
									name={'video'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(video) ? '#BE4F44' : undefined}
									focusColor={!this.state.videoValid ? '#BE4F44' : undefined}
								/>
								<Link
									type={link}
									placeholder={'Link'}
									name={'link'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(link) ? '#BE4F44' : undefined}
									focusColor={!this.state.linkValid ? '#BE4F44' : undefined}
								/>
								<SVG
									type={svg}
									placeholder={'SVG'}
									name={'svg'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(svg) ? '#BE4F44' : undefined}
									focusColor={!this.state.svgValid ? '#BE4F44' : undefined}
								/>
								<PDF
									type={pdf}
									placeholder={'PDF'}
									name={'pdf'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(pdf) ? '#BE4F44' : undefined}
									focusColor={!this.state.pdfValid ? '#BE4F44' : undefined}
								/>
								<Document
									type={document}
									placeholder={'Document'}
									name={'document'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(document) ? '#BE4F44' : undefined}
									focusColor={!this.state.documentValid ? '#BE4F44' : undefined}
								/>
							</div>
						</div>
					</div>
{/* 					<da>
						<div>
							<HelpTitle
								type={helptitle}
								placeholder={'Help title'}
								name={'helptitle'}
								value={this.state.help_item}
								onChange={this.handleUserInput}
								innerRef={this.createRef}
								color={this.inputError(helptitle) ? '#BE4F44' : undefined}
								focusColor={!this.state.helptitleValid ? '#BE4F44' : undefined}
							</HelpTitle>
						</div>
						<div>
							<HelpDescription>
								type={helpdescription}
								placeholder={'Help description'}
								name={'helpdescription'}
								value={this.state.help_item}
								onChange={this.handleUserInput}
								innerRef={this.createRef}
								color={this.inputError(helpdescription) ? '#BE4F44' : undefined}
								focusColor={!this.state.helpdescriptionValid ? '#BE4F44' : undefined}
							</HelpDescription>
						</div>
						<div>
							<HelpContent>
								<Text>
									type={text}
									placeholder={'Text'}
									name={'text'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(text) ? '#BE4F44' : undefined}
									focusColor={!this.state.textValid ? '#BE4F44' : undefined}
								</Text>
								<Image>
									type={image}
									placeholder={'Image'}
									name={'image'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(image) ? '#BE4F44' : undefined}
									focusColor={!this.state.imageValid ? '#BE4F44' : undefined}
								</Image>
								<Video>
									type={video}
									placeholder={'Video'}
									name={'video'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(video) ? '#BE4F44' : undefined}
									focusColor={!this.state.videoValid ? '#BE4F44' : undefined}
								</Video>
								<Link>
									type={link}
									placeholder={'Link'}
									name={'link'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(link) ? '#BE4F44' : undefined}
									focusColor={!this.state.linkValid ? '#BE4F44' : undefined}
								</Link>
								<SVG>
									type={svg}
									placeholder={'SVG'}
									name={'svg'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(svg) ? '#BE4F44' : undefined}
									focusColor={!this.state.svgValid ? '#BE4F44' : undefined}
								</SVG>
								<PDF>
									type={pdf}
									placeholder={'PDF'}
									name={'pdf'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(pdf) ? '#BE4F44' : undefined}
									focusColor={!this.state.pdfValid ? '#BE4F44' : undefined}
								</PDF>
								<Document>
									type={document}
									placeholder={'Document'}
									name={'document'}
									value={this.state.help_item}
									onChange={this.handleUserInput}
									innerRef={this.createRef}
									color={this.inputError(document) ? '#BE4F44' : undefined}
									focusColor={!this.state.documentValid ? '#BE4F44' : undefined}
								</Document>
							</HelpContent>
						</div>
					</da>
		*/}
					<ButtonPanel justify={'left'} margin={'0px'} style={{ margin: '0px' }}>

						<Button
							label={'Save'}
							type={'submit'}
							onClick={this.handleSubmit}
							disabled={!this.state.helpValid}
							isDisabled={!this.state.helpValid}
							color={this.state.helpValid ? '#13A085' : ''}
							margin={'0px'}
						/>

						<Button
							label={'Reset'}
							type={'reset'}
							onClick={this.handleResetInput}
							color={'#BE4F44'}
							margin={'0px'}
						/>

					</ButtonPanel>
					<div>
						<HelpErrors helpErrors={this.state.helpErrors} />
						{`${this.errorClass(helptitle)}`}
						{`${this.errorClass(helpdescription)}`}
						{`${this.errorClass(help_content)}`}
						{`${this.errorClass(text)}`}
						{`${this.errorClass(image)}`}
						{`${this.errorClass(video)}`}
						{`${this.errorClass(link)}`}
						{`${this.errorClass(svg)}`}
						{`${this.errorClass(pdf)}`}
						{`${this.errorClass(document)}`}
					</div>
				</form>
			</div>
		)
	}
}

export default HelpNew

