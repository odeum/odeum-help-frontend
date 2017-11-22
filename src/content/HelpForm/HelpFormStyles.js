import styled from 'styled-components'


export const Input = styled.input`    
	font-size: 17px;
	font-weight: 200;
    padding: 1rem;
    color: ${(props) => props.color ? props.color : '#2C3E50'};
    background: #ECF0F1;
    border: none;
	border-radius: 4px;
    box-sizing: border-box;

    &:hover {
        box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
		cursor: ${(props) => props.isDisabled ? 'not-allowed' : 'pointer'};
    }

    /* &:focus {
		color: ${(props) => props.color ? props.color : '#13A085'};
		font-size: 22px;
		font-weight: 300;
		box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    } */
`

export const Account = Input.extend`
	height: 9%; 
	width: 100%;
	margin-top: 40px;
	color: ${(props) => props.color ? props.color : '#13A085'};
`

export const Username = Input.extend`
	height: 10%; 
	width: 100%;
	margin-top: 15px; 
	color: ${(props) => props.color ? props.color : '#13A085'};
`

export const Email = Input.extend`
	height: 10%; 
	width: 100%;
	margin-top: 15px; 
	color: ${(props) => props.color ? props.color : '#13A085'};
`

export const Password = Input.extend`
	height: 10%; 
	width: 100%;
	margin-top: 15px; 
	margin-bottom: 15px;
	color: ${(props) => props.color ? props.color : '#13A085'};
`
