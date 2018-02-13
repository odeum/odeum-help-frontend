import styled from 'styled-components'

export const DropdownButton = styled.div`
color:${p => p.theme.button.color};
border-radius: 5px;
margin: 0px 1px;
background: ${p => p.active ? p.theme.button.selected : p.theme.button.background};
padding:3px 5px;
padding-right: 8px;
/* align-items:center; */
/* border: 1px solid #3e3e3e; */
&:hover{
	background: ${p => p.theme.button.hover};
	color: ${p => p.theme.button.color};
	cursor: pointer;
}
transition: all 100ms ease;
`
export const SingleOptionButton = DropdownButton.extend`
display:flex;
align-items:center;
`
export const OptionButton = styled.span`
display:flex;
flex-flow:row nowrap;
align-items:center;
font-size:${p => p.size};
color:${p => p.theme.button.color};
background: ${p => p.active ? p.theme.button.selected : p.theme.button.background};
padding:5px;
/* border: 1px solid #3e3e3e; */
&:hover{
	background: ${p => p.theme.button.hover};
	color: ${p => p.theme.button.color};
	cursor: pointer;
}
transition: all 100ms ease;
`

export const ButtonContainer = styled.div`
	border: 1px solid #fff;
	display:flex;
	flex-flow: row nowrap;
	border-radius: 4px;
	overflow:hidden;
	margin: 3px;
`

export const EditorArea = styled.div`
/* margin: 3px; */
/* margin-right: 10px; */
margin: 15px 10px;
border-top: 1px solid #ddd;
padding-top: 10px;

`