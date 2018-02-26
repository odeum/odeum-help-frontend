import styled from "styled-components"

export const overlayTransition = {
	entering: {
		position: 'absolute', width: '100%', height: '100%', alignItems: 'center',
		justifyContent: 'center', background: '#ffffff9a', zIndex: 5
	},
	entered: {
		position: 'absolute', width: '100%', height: '100%', alignItems: 'center',
		justifyContent: 'center', background: '#ffffff9a', zIndex: 5
	},
	exiting: {
		position: 'absolute', width: '100%', height: '100%', alignItems: 'center',
		justifyContent: 'center', background: '#ffffff22', zIndex: 5
	},
	exited: { position: 'relative', background: '#ffffff00' }
}

export const transitionStyles = {
	entering: { width: '10%', },
	entered: { width: 'calc(100% - 120px)' },
	exiting: { width: '20%' },
	exited: {}
}
export const transitionStyles2 = {
	entering: { width: '10%', },
	entered: { width: '100%' },
	exiting: { width: '10%' },
	exited: {}
}
export const CompleteContainer = styled.div`
	display: flex;
	flex-flow:row nowrap;
	margin: ${p => p.expand ? '0px' : '10px'};
	${p => p.expand ?
		`
		z-index:5;
	` : ''}
	transition: all 300ms ease-out;
`

export const ExpandedFormDiv = CompleteContainer.extend`
	/* display: flex; */
	margin:0;
	align-items: center;
	justify-content: center;
	position: absolute;
   	z-index: 3;
   	width: 100%;
    height: 100%;
	background: #ffffff9a;
	transition: all 300ms ease-out;
`
export const ContainerWHorizControls = styled.div`
	display:flex;
	flex-flow: column nowrap;
	align-items:center;
	margin:0;
	${p => p.expand ? `
	width:calc(100% - 120px);
	height:calc(100% - 120px);
	` : ''}
	transition: all 300ms ease;
`

export const CardListContainer = styled.div`
	display:flex;
	flex-flow: row;
	flex:1;
	position: relative;
`

export const FormContainer = styled.div`
/* filter:${p => p.expand ? 'blur(5px)' : ''}; */
	border: 1px solid;
	border-right: 0px;
	border-bottom:0px;
	border-color: #e5e6e9 #dfe0e4 #d0d1d5;
	border-radius: ${p => p.horizOpen ? '10px 10px 0px 0px' : '10px'};
	min-width: 230px;
	min-height: 300px;
	display:flex;
	flex-flow: column nowrap;
/* padding:5px; */
	overflow:hidden;
	box-shadow: 0px -2px 10px 0px rgba(0,0,0,0.2);
	position:relative;
	z-index: 0;
	height: ${ p => p.expand ? '100%' : '300px'};
 	width: ${ p => p.expand ? ' 100%' : '230px'};
/* left:${p => p.expand ? '-' + p.id * 323 + 'px' : '0'}; */
	/* ${p => p.expand ? `
	width:100%;
	height:100%;
	` : ''} */
	transition: all 300ms ease;

`



export const FormContainerExpanded = FormContainer.extend`
	position: relative;
	z-index: 30;
	/* width: calc(100% - 120px); */
	height: calc(100% - 120px);
	transition: all 300ms ease-out;

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
	border-radius: ${p => p.horizOpen ? '0px 0px 10px 10px' : '0px 0px 300px 300px'};
`
export const ExpandButtonContainer = styled.div`
	cursor:pointer;
	align-self: bottom;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-around;
	background: #D5D5D5;
	width: 40%;
	max-width: 290px;
	/* transition: all 100ms linear; */
	border-radius: ${p => p.horizOpen ? '0px 0px 10px 10px' : '0px 0px 150px 150px'};
	height: 15px;
`

export const VerticalButtonContainer = ExpandButtonContainer.extend`
	max-height:200px;
	border-radius: ${p => p.vertOpen ? '0px 0px 10px 10px' : '0px 50px 50px 0px'};
	width: 15px;
	height: 100px;
	margin-top: 40px;
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
	/* transition: all 400ms cubic-bezier(1, 1, 0, 1.5); */
	transition: all 250ms cubic-bezier(.87,-.41,.19,1.44);
	border-radius: 0px 0px 10px 10px;
	overflow:hidden;
`

export const Button = styled.div`
	opacity: ${p => p.horizOpen ? '1' : '0'};
	border: 1px solid #D5D5D5;
	border-radius: 100px;
	cursor: pointer;
	&:hover{
		background: #E6E6E6;
		border: 1px solid #E6E6E6;
	}
	/* transition: all ${p => p.horizOpen ? '40ms' : '300ms'} cubic-bezier(1, 1, 0, 2.5); */
	transition: opacity 0.1s cubic-bezier(.87,-.41,.19,1.44);
`