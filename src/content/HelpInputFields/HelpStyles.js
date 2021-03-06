import styled from 'styled-components'
import { transparentize } from 'polished'


export const Input = styled.input`    
	font-size: 16px;
	font-weight: 200;
    padding: 1rem;
    color: ${(props) => props.color ? props.color : '#2C3E50'};
    background: #ECF0F1;
    border: none;
	border-radius: 4px;
    box-sizing: border-box;
	outline: none;

    /* &:hover {
        box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
		cursor: ${(props) => props.isDisabled ? 'not-allowed' : 'pointer'};
    } */

    &:hover {		
        border-color: ${transparentize(0.7, '#3B97D3')};		 
		box-shadow: ${`0 0 0 3px ${transparentize(0.7, '#3B97D3')}`};
		cursor: ${(props) => props.isDisabled ? 'not-allowed' : 'pointer'};
    }

    &:focus {
		box-shadow: ${(props) => props.focusColor ? `0 0 0 3px ` + props.focusColor : `0 0 0 3px #13A085`};
    }
`

export const Account = Input.extend`
	height: 9%; 
	width: 100%;
	margin-top: 40px;
	color: ${(props) => props.color ? props.color : '#13A085'};
`

export const HelpTitle = Input.extend`
	height: 10%; 
	width: 100%;
	margin-top: 15px; 
	color: ${(props) => props.color ? props.color : '#13A085'};
`

export const InputGreen = Input.extend`
height: 9%; 
width: 100%;
margin-top: 10px;
color: ${(props) => props.color ? props.color : '#13A085'};
`

export const ModalDiv = styled.div`
position: absolute;
min-width: 100vw;
min-height: 100vh;
z-index: 1;
background: #000000AE;
 top: 0;
 left: 0;
display:flex;
align-items:center;
justify-content:center;
`

export const DoublePanel = styled.div`
display:grid;
grid-auto-rows: max-content;
grid-template-columns: 1fr 1fr;
`
export const Panel = styled.div`
margin: 5px;
padding: 3px;
border-radius: 5px;
border: 1px solid #e1e1e1;
`

export const TD = styled.td`
padding: 8px;
border: 1px solid #ddd;
`

export const Table = styled.table`
border-collapse:collapse;
border: 1px solid #ddd;
`
export const TR = styled.tr`
border: 1px solid #ddd;
&:nth-child(odd){
	background:#f2f2f2;
}
width: 100px;
&:hover{
	color:royalblue;
	background: #ddd;
}
cursor:pointer;
`
export const TH = styled.th`
border: 1px solid #ddd;
width: 100px;
font-weight: bold;
padding: 8px;
`