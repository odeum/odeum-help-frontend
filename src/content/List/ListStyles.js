import styled from "styled-components"

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

export const ListItemContainer = styled.div`
	display:grid;
	grid-template-columns: repeat(5, 1fr);
	border: 1px solid #e3e3e3;
	background: #e3e3e3;
	border-radius: 5px;
	margin: 3px;
	height: 25px;
	align-content: center;
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
	background: #b3b3b3;
	/* width: ${p => p.horizOpen ? '100%' : '40%'}; */
	border-radius: 0px 5px 5px 0px;
	width: 15px;
	height:25px;
	transition: all 250ms ease;
	justify-self:end;
`

// export const VerticalButtonContainer = ExpandButtonContainer.extend`
// 	/* max-height:200px; */
// 	/* border-radius: ${p => p.vertOpen ? '0px 0px 10px 10px' : '0px 50px 50px 0px'}; */
// 	width: 15px;
// 	height: 80%;
// `