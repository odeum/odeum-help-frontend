import styled from "styled-components"


export const CardListContainer = styled.div`
display:flex;
flex-flow: row;
overflow:${p => p.active !== -1 ? 'hidden' : ''};
width:100%;
height:100%;
`
export const FormContainer = styled.div`
border: 1px solid;
border-bottom: 0px;
border-color: #e5e6e9 #dfe0e4 #d0d1d5;
border-radius: ${p => p.horizOpen ? '10px 10px 0px 0px' : '10px'};
min-width: ${p => p.expand ? 'calc( 100% - 20px)' : '230px'};
min-height: 300px;
display:flex;
flex-flow: column nowrap;
margin: 10px 10px 0px 10px;
/* padding:5px; */
overflow:hidden;
box-shadow: 0px -2px 10px 0px rgba(0,0,0,0.2);
position: ${p => p.expand ? 'absolute' : 'relative'};
z-index: ${ p => p.expand ? '99' : '0'};
/* height: ${ p => p.expand ? '96%' : '350px'}; */
/* width: ${ p => p.expand ? ' 96%' : '300px'}; */
/* left:${p => p.expand ? '-' + p.id * 323 + 'px' : '0'}; */
transition: all 100ms linear;
`

export const FormImg = styled.div`
background: gray;
width: 100%;
height: 150px;
`

export const Header = styled.div`
background: white;
display: flex;
align-items: center;
font-size: 20px;
padding: 5px;
/* margin-left:15px; */
`

export const ProjectInfo = styled.div`
background: white;
display: flex;
flex-flow: row nowrap;
justify-content: space-around;
width: 100%;
padding: 5px;
flex: 1;
`

export const Title = styled.div`
font-weight: 700;
`

export const ProjectInfoCategory = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
`
export const ControlsContainer = styled.div`
align-self: bottom;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-around;
width: 100%;
max-width: 290px;
/* transition: all 100ms linear; */
margin: 10px;
margin-top:0px;
border-radius: ${p => p.horizOpen ? '0px 0px 10px 10px' : '0px 0px 300px 300px'};
`
export const ExpandButtonContainer = styled.div`
align-self: bottom;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-around;
/* padding: 5px; */
background: #D5D5D5;
width: ${p => p.horizOpen ? '100%' : '30%'};
max-width: 290px;
transition: all 100ms linear;
/* margin: 0px 10px; */
margin-top:0px;
border-radius: ${p => p.horizOpen ? '0px 0px 10px 10px' : '0px 0px 300px 300px'};
/* &:after{
	content:'';
	width:80%;
	height:10px;
	background:#D5D5D5;
	border-radius: 0px 0px 10px 10px;
}
&:before{
	background:#D5D5D5;
	content:'';
	height:10px;
	width:100%;
} */
`

export const ButtonContainer = styled.div`
height: ${p => p.horizOpen ? '40px' : '0px'};
visibility: ${p => p.horizOpen ? 'visible' : 'hidden'};
align-self: bottom;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-around;
/* padding: ${p => p.horizOpen ? '5px' : '0px'}; */
background: #D5D5D5;
/* width: ${p => p.horizOpen ? '100%' : '30%'}; */
width: 100%;
max-width: 225px;
transition: all 400ms cubic-bezier(1, 1, 0, 1.5);
border-radius: 0px 0px 10px 10px;
overflow:hidden;
`

export const Button = styled.div`
/* visibility: ${p => p.horizOpen ? 'visible' : 'hidden'}; */
border: 1px solid #D5D5D5;
border-radius: 100px;
cursor: pointer;
&:hover{
	background: #E6E6E6;
	border: 1px solid #E6E6E6;
}
transition: all ${p => p.horizOpen ? '40ms' : '300ms'} cubic-bezier(1, 1, 0, 2.5);
`