import React, { Component } from 'react'
import { ButtonPanel, Button } from 'odeum-ui'

import { Email, Password } from './FormStyles'
import FormErrors from './FormErrors'

class FormNew extends Component {

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

	handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		this.setState({ [name]: value },
			() => { this.validateField(name, value) })
	}

	handleSubmit = (e) => {
		alert('Your mail address is: ' + this.state.email + ' and your password is: ********')
		e.preventDefault()
		console.log('Form submitted ... ')
		this.props.onSubmit(this.state)
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

	inputError(error) {		
		return (error.length === 0 ? false : true)
	}

	createRef = (input) => {
		this.textInput = input
	}

	focusTextInput = () => {
		this.textInput.focus()
	}

	componentDidMount() {
		// this.handleResetInput()
		this.focusTextInput()
	}
	
	handleFocus = () => {
		console.log('OnFocus')
	}

	handleBlur = () => {
		console.log('OnBlur')
	}
	
	handleMouse = (passage) => (e) => {
		e.preventDefault()
		console.log('OnMouse' + passage)
	}

	render() {
		const { email, password } = this.state.formErrors
		return (
			<div>
				<h1>Form Demo</h1>
				<p>Please enter your e-mail and password:</p>
				<form>
					<div>
						<Email 
							type={'email'} 
							// required 
							placeholder={'Mail address'} 
							name={'email'} 
							value={this.state.email}
							disabled={false}
							onChange={this.handleChange}
							innerRef={this.createRef}
							color={!this.state.emailValid ? '#BE4F44' : undefined}
							focusColor={!this.state.emailValid ? '#BE4F44' : undefined}
							onFocus={this.handleFocus}
							onBlur={this.handleBlur}
							onMouseEnter={this.handleMouse('Enter')}
							onMouseLeave={this.handleMouse('Leave')}
						/>						
       				</div>
					<div>
						<Password 
							type={'password' }
							placeholder={'Password'} 
							name={'password'}
							value={this.state.password}
							disabled={false}
							onChange={this.handleChange}
							color={!this.state.passwordValid ? '#BE4F44' : undefined}
							focusColor={!this.state.passwordValid ? '#BE4F44' : undefined}
							onFocus={this.handleFocus}
							onBlur={this.handleBlur}
						/>
       				</div>

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
					<div>
						<FormErrors formErrors={this.state.formErrors} />
						{`${this.errorClass(email)}`}{' '}
						{`${this.errorClass(password)}`}
					</div>
				</form>
			</div>
		)
	}
}

export default FormNew
