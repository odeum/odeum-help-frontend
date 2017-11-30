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
	render() {
		return (
			<div>
				<form>
					{this.props.children}
				</form>
			</div>
		)
	}
}

export class Email extends Component {
	render() {
		const { email, password } = this.state.formErrors
		return (
			<div>
				<Field 
					type={'email'}
					
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

class FormTester extends Component {
	render() {
		return (
			<div>
				<Form>
					<Email 
						label={''} 
						validate={false} 
						placeholder={'Mail address'} 
					/>
				</Form>
			</div>
		)
	}
}

export default FormTester