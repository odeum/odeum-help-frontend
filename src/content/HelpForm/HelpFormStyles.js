import styled from 'styled-components'

export const Input = styled.input`
    font-size: 1.25em;
    padding: 0.5em;
    margin: 0.5em;
    color: #2C3E50;
    background: #ECF0F1;
    border: none;
    border-radius: 4px;

    &:hover {
        box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    }
`

export const InputField = styled.input`    
	font-size: 17px;
	font-weight: 200;
    padding: 1rem;
    color: #2C3E50;
    background: #ECF0F1;
    border: none;
	border-radius: 4px;
    box-sizing: border-box;

    &:hover {
        box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
		cursor: ${(props) => props.isDisabled ? 'not-allowed' : 'pointer'};
    }

    &&:active {
    	border: 2px;
		border-color: #00DFB1
		font-size: 37px;
		box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
		/* box-shadow: ${(props) => props.isDisabled ? null : `0 0 0 3px`}; */
    }
`

export const Account = InputField.extend`
	height: 9%; 
	width: 100%;
	margin-top: 40px;
`

export const Username = InputField.extend`
	height: 10%; 
	width: 100%;
	margin-top: 15px; 
`

export const Email = InputField.extend`
	height: 10%; 
	width: 100%;
	margin-top: 15px; 
`

export const Password = InputField.extend`
	height: 10%; 
	width: 100%;
	margin-top: 15px; 
	margin-bottom: 15px;
`
