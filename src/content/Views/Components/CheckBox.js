import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyledCheckbox, CheckMarkIco } from './CheckboxStyles'

class Checkbox extends PureComponent {

	constructor(props) {
		super(props)

		this.state = {
			isChecked: false
		}
	}

	handleChange = () => {
		if (this.props.onChange) {
			this.props.onChange(!this.state.isChecked)
		}
		this.setState({ isChecked: !this.state.isChecked })


	}

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.checked !== this.props.checked) {
	// 		this.setState({ isChecked: nextProps.checked })
	// 	}
	// 	this.setState({ isChecked: nextProps.checked })
	// }


	render() {
		const { size } = this.props
		return (
			<StyledCheckbox size={size}>
				<input
					type="checkbox"
					checked={this.state.isChecked}
					onChange={this.handleChange}
				/>
				<CheckMarkIco className="checkmark" size={size}></CheckMarkIco>
			</StyledCheckbox>
		)
	}
}

Checkbox.propTypes = {
	checked: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'medium']),
	onChange: PropTypes.func,
}

Checkbox.defaultProps = {
	checked: false,
	size: 'small'
}

export default Checkbox
