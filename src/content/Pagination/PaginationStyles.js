import styled from "styled-components"


export const PageButton = styled.a`
background: ${p => p.theme.tab.selected};
padding: 5px 10px;
color: ${p => p.theme.tab.activeColor};
border-radius: 5px;
margin:5px;
cursor:pointer;
`

export const PageNumberButton = styled.a`
background: ${p => p.active ? p.theme.tab.selected : p.theme.tab.unselected};
padding: 10px;
/* color: ${p => p.theme.tab.activeColor}; */
color: ${p => p.active ? '#fff' : '#000'};
/* border-radius: 5px; */
cursor:pointer;
&:hover{
	background: ${p => p.theme.tab.hover};
	color: ${p => p.theme.tab.activeColor};
}
`

export const PageNumberContainer = styled.div`
background: ${p => p.theme.tab.unselected};
color: #000;
border-radius:5px;
overflow:hidden;
border: 1px solid gray;
padding:5px 0px;
`

export const PaginationContainer = styled.div`
display:flex;
/* grid-template-columns: ${p => 'repeat(1fr,' + p.pageSize / 2 + ')'}; */
/* grid-template-rows: 1fr 1fr; */
flex-flow:row nowrap;
justify-content:center;
align-items:center;
margin-top:5px;
`