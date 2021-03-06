import styled from "styled-components"



export const Text = styled.div`
	display:inline-block;
	text-overflow: ellipsis;
	white-space:nowrap;
	overflow:hidden;
	max-width: 200px;
	max-height: 30px;
`

export const FormCardContainer = styled.div`
	position:relative;
	display:flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items:center;
	border-radius: 4px;
	width: 250px;
	height: 300px;
	margin: 20px;
`
export const Shadow = FormCardContainer.extend`
	z-index: 2;
	min-height: 300px;
	min-width: 250px;
	box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.3);
`
export const FormImg = styled.div`
	width: 100%;
	height: 150px;
	display: flex;
	align-items: flex-start;
	justify-content:center;
	background: url(${p => p.img});
	background-size: cover;
    overflow: hidden;
    border-radius: 4px 4px 0px 0px;
	/* box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.3); */
	z-index: 2;
`

export const ProjectInfoContainer = styled.div`
	display:flex;
	flex-flow:row wrap;
	flex: 1;
	align-items: flex-start;
	justify-content:flex-start;
	/* box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.3); */
    z-index: 3;
    border-radius: 0px 0px 4px 4px;
`

export const ProjectInfoCategory = styled.div`
	margin: 4px;
`
export const ProjectInfoTitle = styled.div`

`
export const ProjectInfo = styled.div`

`

export const VerticalControls = styled.div`
	position: absolute;
	left: 100%;
	display:flex;
	align-items:center;
	justify-content:center;
	flex-flow:column nowrap;
	width:13px;
	height: 40%;
	background:#D5D5D5;
	border: 1px solid #D5D5D5;
	border-radius: 0px 4px 4px 0px;
	color: #34495D;
	z-index:1;
	transform: perspective(20px) rotateY(20deg);
	cursor: pointer;
	user-select: none;
`

export const VerticalButton = styled.div`
	height: 10px;
	cursor: pointer;
	user-select: none;
	/* transform: perspective(20px) rotateY(-20deg); */

`

export const HorizontalControls = styled.div`
	position:absolute;
	top: 100%;
	display:flex;
	align-items:center;
	/* justify-content:center; */
	flex-flow:column;
	height: ${p => p.expand ? '60px' : '20px'};
	width: 100%;
	transition: all 300ms ease;
	margin-top:1px;
	z-index:${p => p.expand ? 5 : 1};
`

export const HorizontalButton = styled.div`
	cursor: pointer;
	min-height:${p => p.expand ? '10px' : '20px'};
	height:${p => p.expand ? '10px' : '20px'};
	background:#D5D5D5;
	border-radius: 0px 0px 4px 4px;
	color: #34495D;
	/* width:  ${p => p.expand ? '99%' : '40%'} ; */
	width: 40%;
	display:flex;
	align-items:center;
	justify-content:center;
	transition: all 300ms ease;
	user-select: none;
	transform: perspective(20px) rotateX(-20deg);
`
export const ControlButton = styled.div`
	border-radius: 4px;
	&:hover{
		background: ${p => p.theme.tab.hover};
	}
`

export const HorizontalControlsDrawer = styled.div`
	overflow:hidden;
	background:#D5D5D5;
	width: 90%;
	height: ${p => p.expand ? '40px' : '0px'};
	transition: all 300ms ease;
	display:flex;
	flex-flow:row nowrap;
	justify-content:space-around;
	align-items:center;
	border-radius: 0px 0px 4px 4px;

`