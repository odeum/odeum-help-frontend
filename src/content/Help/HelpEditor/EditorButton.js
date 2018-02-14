import React from 'react'
import { OptionButton as OptionButtonDiv, SingleOptionButton } from './HelpEditorStyles'
import { Icon } from 'odeum-ui'

export const DropdownOption = (props) => {
	const onToggle = (e) => {
		e.preventDefault()
		props.onToggle(props.style)
	}
	return (
		<OptionButtonDiv size={props.size} active={props.active} onMouseDown={onToggle}>
			<Icon icon={props.icon} iconSize={props.size ? props.size : 20} active={true} color={'#fff'} style={{ marginRight: "3px" }} />{props.label}
		</OptionButtonDiv>
	)
}

export const InlineButton = (props) => {
	const onToggle = (e) => {
		e.preventDefault()
		props.onToggle(props.style)
	}
	return (
		<SingleOptionButton size={props.size} active={props.active} onMouseDown={onToggle}>
			<Icon icon={props.icon} iconSize={props.size ? props.size : 20} active={true} color={'#fff'} style={{ marginRight: "3px" }} />{props.label}
		</SingleOptionButton>
	)
}
