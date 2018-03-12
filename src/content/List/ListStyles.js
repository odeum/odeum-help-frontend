import styled from "styled-components"
import { transparentize } from 'polished'

export const Cell = styled.div`
	display:flex;
	align-items:center;
	overflow: hidden;
	margin: 0px 8px;
`
export const Text = styled.div`
	display:inline-block;
	text-overflow: ellipsis;
	white-space:nowrap;
	overflow:hidden;
`
export const ListCardItem = styled.div`
	display:flex;
	flex-flow:row nowrap;
	align-items:center;
	margin: 0px 4px;
`

export const ListItemContainer = styled.div`
	display:grid;
	grid-template-columns: repeat(5, 1fr);
	color: ${p => p.selected ? p.theme.tab.activeColor : p.theme.tab.color};
	border: 1px solid ${p => p.selected ? p.theme.tab.selected : p.theme.tab.unselected};
	background: ${p => p.selected ? p.theme.tab.selected : p.theme.tab.unselected};
	border-radius: 5px;
	margin: 3px;
	height: 25px;
	align-content: center;
	width: 100%;
	&:hover {
		border-color: ${p => transparentize(0.7, p.theme.tab.hover)};
		box-shadow: ${p => `0 0 0 3px ${transparentize(0.7, p.theme.tab.hover)}`};
	}
	cursor: default;
`

export const Label = Cell.extend`
	font-weight: 700;
`

export const Responsible = Cell.extend`
	font-style: italic;
`

export const ExpandButtonContainer = styled.div`
	cursor:pointer;
	align-self: bottom;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-around;
	background: ${p => p.selected ? p.theme.tab.selected : p.theme.tab.unselected};
	border-radius: 0px 5px 5px 0px;
	width: 15px;
	height:25px;
	justify-self:end;
`
export const ButtonContainer = styled.div`
	width: ${p => p.horizOpen ? '100px' : '0px'};
	visibility: ${p => p.horizOpen ? 'visible' : 'hidden'};
	align-self: bottom;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-around;
	background: #d5d5d5;
	height: 100%;
	/* max-width: 200px; */
	transition: all 250ms cubic-bezier(.87,-.41,.19,1.44);
	border-radius: 3px;
	overflow:hidden;
`
export const ControlsContainer = styled.div`
	display:flex;
	flex-flow:row nowrap;
	justify-self: end;
	justify-content: right;
`
export const Button = styled.div`
	opacity: ${p => p.horizOpen ? '1' : '0'};
	border-radius: 100px;
	cursor: pointer;
	&:hover{
		background: #E6E6E6;
		border: 1px solid #E6E6E6;
	}
	transition: opacity 0.1s cubic-bezier(.87,-.41,.19,1.44);
`
// export const VerticalButtonContainer = ExpandButtonContainer.extend`
// 	/* max-height:200px; */
// 	/* border-radius: ${p => p.vertOpen ? '0px 0px 10px 10px' : '0px 50px 50px 0px'}; */
// 	width: 15px;
// 	height: 80%;
// `