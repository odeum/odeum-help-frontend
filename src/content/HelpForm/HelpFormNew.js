import React, { Component } from 'react'
import { ButtonPanel, Button } from 'odeum-ui'

import { Email, Password } from './HelpFormStyles'
import HelpFormErrors from './HelpFormErrors'

class HelpFormNew extends Component {

	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',			
			formErrors: { email: '', password: '' },
			emailValid: false,
			passwordValid: false,
			formValid: false
		}
	}

	handleResetInput = () => {
		this.setState({
			email: '',
			password: '',
			formErrors: { email: '', password: '' },
			emailValid: false,
			passwordValid: false,
			formValid: false
		})
	}

	handleUserInput = (e) => {
		const name = e.target.name
		const value = e.target.value
		this.setState({ [name]: value },
			() => { this.validateField(name, value) })
	}

	handleSubmit = (e) => {
		alert('Your mail address is: ' + this.state.email)
		e.preventDefault()
		this.props.onSubmit()
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors
		let emailValid = this.state.emailValid
		let passwordValid = this.state.passwordValid

		switch (fieldName) {
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
				fieldValidationErrors.email = emailValid ? '' : ' is invalid'
				break
			case 'password':
				passwordValid = value.length >= 8
				fieldValidationErrors.password = passwordValid ? '' : ' is too short'
				break
			default:
				break
		}
		
		this.setState({
			formErrors: fieldValidationErrors,
			emailValid: emailValid,
			passwordValid: passwordValid
		}, this.validateForm)
	}

	validateForm() {
		this.setState({ formValid: this.state.emailValid && this.state.passwordValid })
	}

	errorClass(error) {
		return (error.length === 0 ? '' : 'has-error')
		// return (error.length === 0 ? false : true)
	}

	errorColor(error) {		
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
		return (
			<div>
				<form>
					<h1>Create New Help Item</h1>
					<div>
						<Email 
							type={'email'} 
							// required 
							placeholder={'Mail address'} 
							name={'email'} 
							value={this.state.email}
							onChange={this.handleUserInput}
							innerRef={this.createRef}
							color={this.errorColor(this.state.formErrors.email) && '#CE1D1D'}
						/>						
       				</div>
					<div>
						<Password 
							type={'password'} 
							placeholder={'Password'} 
							name={'password'}
							value={this.state.password}
							onChange={this.handleUserInput}
							color={this.errorColor(this.state.formErrors.password) && '#CE1D1D'}
						/>
       				</div>

					<ButtonPanel justify={'left'} margin={'0px'} style={{ margin: '0px' }}>

						<Button 
							label={'Save'} 
							type={'submit'} 
							onClick={this.handleSubmit} 
							disabled={!this.state.formValid} 
							isDisabled={!this.state.formValid}
							color={this.state.formValid ? '#13A085' : ''}
							margin={'0px'}
						/>
						
						<Button 
							label={'Reset'} 
							type={'reset'} 
							onClick={this.handleResetInput} 
							color={'#E74C3C'}
							margin={'0px'}
						/>

					</ButtonPanel>
					<div>
						<HelpFormErrors formErrors={this.state.formErrors} />
						{`${this.errorClass(this.state.formErrors.email)}`}
						{`${this.errorClass(this.state.formErrors.password)}`}
					</div>
     			</form>
			</div>
		)
	}
}

export default HelpFormNew

