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
					{...this.props} 
					type={'email'}
					// required 
					placeholder={'Mail address'}
					name={'email'}
					value={this.state.email}
					disabled={false}
					onChange={this.handleChange}
					innerRef={this.createInnerRef('email')}
					color={!this.state.emailValid ? '#BE4F44' : undefined}
					focusColor={!this.state.emailValid ? '#BE4F44' : undefined}
					onFocus={this.handleFocus}
					onBlur={this.handleChange}
					onMouseEnter={this.handleMouse('Enter')}
					onMouseLeave={this.handleMouse('Leave')}
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
					<Email label={''} validate={false} />
				</Form>
			</div>
		)
	}
}

export default FormTester