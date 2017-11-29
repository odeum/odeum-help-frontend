import React, { Component } from 'react'
import { ButtonPanel, Button } from 'odeum-ui'

import { HelpTitle } from './HelpStyles'
import HelpErrors from './HelpErrors'

class HelpNew extends Component {

	constructor(props) {
		super(props)

		this.state = {
			locale_content: {
				en: {
					helptitle: 'english'
				},
				da: {
					helptitle: 'dansk'
				}
			},
			helpErrors: { helptitle: '' },
			helptitlelValid: false,
			formValid: false
		}
	}

	// Lifecycle Methods

	componentDidMount() {
		// this.handleResetInput()
		this.focusHelpTitleInput()
		document.addEventListener('keydown', this.onKeydown)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onKeydown)
	}
	
	onKeydown = ({ keyCode }) => {
		switch (keyCode) {
			case 27: // ESCAPE
				this.handleResetInput()
				break
			case 13: // ENTER
				break
			default:
				break
		}
	}

	handleResetInput = () => {
		this.setState({
			locale_content: {
				en: {
					helptitle: 'english'
				},
				da: {
					helptitle: 'dansk'
				}
			}
		})
		this.focusHelpTitleInput()
	}

	handleChange = (e) => {
		console.log('Input changed')
		const name = e.target.name
		const value = e.target.value
		this.setState({ [name]: value },
			() => { this.validateField(name, value) })
	}

	handleSubmit = (e) => {		
		e.preventDefault()
		console.log('Help submitted ... ')
		this.props.onSubmit(this.state)
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.helpErrors
		let helptitleValid = this.state.helptitlelValid

		switch (fieldName) {
			case 'helptitle':
				helptitleValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
				fieldValidationErrors.helptitle = helptitleValid ? '' : ' is invalid'
				break
			default:
				break
		}
		
		this.setState({
			helpErrors: fieldValidationErrors,
			helptitleValid: helptitleValid,
		}, this.validateHelp)
	}

	validateHelp() {
		this.setState({ helpValid: this.state.helptitleValid })
	}

	errorClass(error) {
		return (error.length === 0 ? '' : 'has-error')
		// return (error.length === 0 ? false : true)
	}

	inputError(error) {		
		return (error.length === 0 ? false : true)
	}

	createRef = (input) => {
		this.helptitleInput = input
	}

	focusEmailInput = () => {
		this.helptitleInput.focus()
	}

	handleFocus = () => {
	}

	handleBlur = () => {
	}
	
	handleMouse = (passage) => (e) => {
		e.preventDefault()
	}

	render() {
		const { helptitle  } = this.state.locale_content.en
		return (
			<div>
				<h1>Help Demo</h1>
				<p>Please enter your help item:</p>
				<form>
					<div>
						<HelpTitle 
							type={'helptitle'} 
							// required 
							placeholder={'Help title'} 
							name={'helptitle'} 
							value={this.state.helptitle}
							disabled={false}
							onChange={this.handleChange}
							innerRef={this.createRef}
							color={!this.state.helptitleValid ? '#BE4F44' : undefined}
							focusColor={!this.state.helptitleValid ? '#BE4F44' : undefined}
							onFocus={this.handleFocus}
							onBlur={this.handleChange}
							onMouseEnter={this.handleMouse('Enter')}
							onMouseLeave={this.handleMouse('Leave')}
						/>						
       				</div>

					<ButtonPanel justify={'left'} >

						<Button 
							label={'Save'} 
							icon={'check'}
							type={'submit'} 
							onClick={this.handleSubmit} 
							disabled={!this.state.helpValid} 
							isDisabled={!this.state.helpValid}
							color={this.state.helpValid ? '#13A085' : ''}							
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
					<div>
						<HelpErrors helpErrors={this.state.helpErrors} />
						{`${this.errorClass(helptitle)}`}{' '}
					</div>
				</form>
			</div>
		)
	}
}

export default HelpNew
