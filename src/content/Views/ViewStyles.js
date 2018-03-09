import styled from "styled-components"
import { transparentize } from 'polished'
import { Label, Cell, Responsible } from '../List/ListStyles'

export const HeaderListContainer = styled.div`
	display:flex;
	flex-flow: row nowrap;
	align-items:center;
	background: ${p => p.theme.header.background};
	color: #FFFFFF;
	padding: 5px;
	border-radius: 4px;
	margin: 10px 0px;
`
export const CellHeaderContainer = styled.div`
	height: 100%;
	display:grid;
	grid-template-columns: repeat(5, 1fr);
	flex: 1;
`

export const LabelHeader = Label.extend`
	font-weight:${p => p.active ? 700 : 400};
	border-radius: 4px;
	margin: 0px 4px;
	display:flex;
	justify-content: space-between;
	padding-left: 8px;
	cursor: pointer;
	&:hover {
		background: ${p => p.theme.tab.hover};
	}
	&:after{
		${p => p.active ? `
		font-weight: 700;
		content: "\u2191";
		transform: ${p.sorting ? 'rotate(180deg)' : ''};
		margin-right: 4px;
	` : null};
	}
`
export const CellHeader = Cell.extend`
	font-weight:${p => p.active ? 700 : 400};
	padding-left: 8px;
	border-radius: 4px;
	margin: 0px 4px;
	display:flex;
	justify-content: space-between;
	cursor: pointer;
	&:hover {
		color: #fff;
		background: ${p => p.theme.tab.hover};
	}
	&:after{
		${p => p.active ? `
		font-weight: 700;
		content: "\u2191";
		transform: ${p.sorting ? 'rotate(180deg)' : ''};
		margin-right: 4px;
	` : null};
	}
`

export const ResponsibleHeader = Responsible.extend`
	font-weight:${p => p.active ? 700 : 400};
	padding-left: 8px;
	font-style: normal;
	border-radius: 4px;
	margin: 0px 4px;
	display:flex;
	justify-content: space-between;
	cursor: pointer;
	&:hover {
		color: #fff;
		background: ${p => p.theme.tab.hover};
	}
	&:after{
		
		${p => p.active ? `
		font-weight: 700;
		content: "\u2191";
		transform: ${p.sorting ? 'rotate(180deg)' : ''};
		margin-right: 4px;
	` : null};
	}
`

export const Select = styled.select`
	height: 30px;
	padding: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
	&:-ms-expand {
    display: none;
	}
    text-indent: 1px;
    text-overflow: '';	background: #ECF0F1;
	border:none;
	border-radius: 4px;
	box-sizing: border-box;
	outline: none;
	margin: 0px 5px;
	&:hover {
		border-color: ${p => transparentize(0.7, p.theme.tab.hover)};
		box-shadow: ${p => `0 0 0 3px ${transparentize(0.7, p.theme.tab.hover)}`};
	}
	&:focus {
		box-shadow: ${p => `0 0 0 3px` + p.theme.tab.selected};
	}
`

export const Input = styled.input`
    padding: 5px;
	height: 30px;
    color: ${(props) => props.color ? props.color : '#2C3E50'};
    background: #ECF0F1;
    border: none;
	border-radius: 4px;
    box-sizing: border-box;
	outline: none;
	margin: 0px 5px;

    &:hover {
        border-color: ${p => transparentize(0.7, p.theme.tab.hover)};
		box-shadow: ${p => `0 0 0 3px ${transparentize(0.7, p.theme.tab.hover)}`};
		cursor: ${(props) => props.isDisabled ? 'not-allowed' : 'pointer'};
    }

    &:focus {
		box-shadow: ${(props) => `0 0 0 3px ` + props.theme.tab.selected};
    }
`

export const CardListContainer = styled.div`
	display:grid;
	/* display:-ms-grid; */
	grid-template-columns: ${p => 'repeat(' + Math.round(p.pageSize / 2) + ',1fr)'};
	grid-template-rows: 1fr 1fr;
	position: relative;
`

export const ListContainer = styled.div`
	display:grid;
	margin: 5px;
	grid-template-columns: 1fr;
	/* width: 70%; */
`

export const HeaderContainer = styled.div`
	display:flex;
	flex-flow:row nowrap;
	align-items:center;
	height: 45px;
	min-height: 45px;
`
export const ChangeViewButtonContainer = styled.div`
	display:flex;
	flex:1;
	justify-content:flex-end;
	flex-flow: row nowrap;
	align-items:center;
	margin: 4px;
`

export const ChangeViewButton = styled.div`
	background: ${p => p.theme.tab.selected};
	padding: 5px 10px;
	color: ${p => p.theme.tab.activeColor};
	border-radius: 5px;
	margin:5px;
	cursor:pointer;
`

export const ChangeViewButtonList = ChangeViewButton.extend`
	background: ${p => p.view === 1 ? p.theme.tab.selected : p.theme.tab.unselected};
`
export const ChangeViewButtonCard = ChangeViewButton.extend`
	background: ${p => p.view === 0 ? p.theme.tab.selected : p.theme.tab.unselected};
`
export const ChangeViewButtonMap = ChangeViewButton.extend`
	background: ${p => p.view === 2 ? p.theme.tab.selected : p.theme.tab.unselected};
`