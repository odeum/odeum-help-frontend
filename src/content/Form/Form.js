import React, { Component } from 'react'
import { StyledInput } from './FormStyles'


export class Field extends Component {
	render() {
		return (
			<div>
				<StyledInput {...this.props} />
			</div>
		)
	}
}

export class Form extends Component {

	inputRefs = {}
	
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit} {...this.props}>
					{this.props.children}
				</form>
			</div>
		)
	}
}

export class Email extends Component {
	
	render() {		
		return (
			<div>
				<Field 
					type={'email'}
					// required 
					// placeholder={'Mail address'}
					name={'email'}
					value={this.state.email}
					disabled={false}
					onChange={this.props.handleChange}
					innerRef={this.createInnerRef('email')}
					color={!this.state.emailValid ? '#BE4F44' : undefined}
					focusColor={!this.state.emailValid ? '#BE4F44' : undefined}
					onFocus={this.handleFocus}
					onBlur={this.handleChange}
					onMouseEnter={this.handleMouse('Enter')}
					onMouseLeave={this.handleMouse('Leave')}
					{...this.props} 
				/>
			</div>
		)
	}
}

// App or other higher component using the form
class FormTester extends Component {

	constructor(props) {
		super(props)
		
		this.state = {
			values: {}
		}
	}
	

	handleOnSubmit = (data) => {
	
	}

	render() {
		const { email, } = this.state.formErrors
		return (
			<div>
				<Form>
					<Email 
						validate={false} 
						placeholder={'Mail address'} 
					/>
				</Form>
			</div>
		)
	}
}

export default FormTester