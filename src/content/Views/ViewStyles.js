import styled from "styled-components"


export const CardListContainer = styled.div`
	display:grid;
	/* display:-ms-grid; */
	grid-template-columns: ${p => 'repeat(' + Math.round(p.pageSize / 2) + ',1fr)'};
	grid-template-rows: 1fr 1fr;
	position: relative;
`

export const HeaderContainer = styled.div`
	display:flex;
	flex-flow:row nowrap;
`