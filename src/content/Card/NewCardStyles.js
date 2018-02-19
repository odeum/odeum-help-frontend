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
border-color: #e5e6e9 #dfe0e4 #d0d1d5;
border-radius: 10px;
min-width: ${p => p.expand ? 'calc( 100% - 20px)' : '300px'};
min-height: 350px;
display:flex;
flex-flow: column nowrap;
margin: 10px;
/* padding:5px; */
overflow:hidden;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
position: relative;
z-index: ${ p => p.expand ? '99' : '0'};
height: ${ p => p.expand ? '96%' : '350px'};
width: ${ p => p.expand ? ' 96%' : '300px'};
left:${p => p.expand ? '-' + p.id * 323 + 'px' : '0'};
transition: all 500ms ease;
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

export const ButtonContainer = styled.div`
align-self: bottom;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: space-around;
padding: 5px;
background: #D5D5D5;

`

export const Button = styled.div`
border: 1px solid #D5D5D5;
border-radius: 100px;
cursor: pointer;
&:hover{
	background: #E6E6E6;
	border: 1px solid #E6E6E6;
}

`