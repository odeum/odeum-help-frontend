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

export const ContainerWHorizControlsTransitions = {
	entering: { width: '230px', height: '300px' },
	entered: { width: 'calc(100% - 120px)', height: '100%' },
	exiting: { width: '230px', height: '300px' },
	exited: { width: '230px', height: '300px' }
}

export const FormContainerTransitions = {
	entering: { width: '230px', height: '300px' },
	entered: { width: '100%', height: 'calc(100% - 60px)' },
	exiting: { width: '230px', height: '300px' },
	exited: { width: '230px', height: '300px' }
}

export const CompleteContainerTransitions = {
	entering: { width: '230px', height: '300px', alignItems: 'center', justifyContent: 'center' },
	entered: { width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },
	exiting: { width: '230px', height: '300px', alignItems: 'center', justifyContent: 'center' },
	exited: { width: '230px', height: '300px' }
}

export const CompleteContainer = styled.div`
	display: flex;
	flex-flow:row nowrap;
	margin: ${p => p.expand ? '0px' : '10px'};
	transition: all 250ms ease;
`

export const ContainerWHorizControls = styled.div`
	display:flex;
	flex-flow: column nowrap;
	align-items:center;
	margin:0;
	transition: all 250ms ease;
`

export const CardListContainer = styled.div`
	display:flex;
	flex-flow: row wrap;
	flex:1;
	position: relative;
`

export const FormContainer = styled.div`
	border: 1px solid;
	border-right: 0px;
	border-bottom:0px;
	border-color: #e5e6e9 #dfe0e4 #d0d1d5;
	border-radius: 10px;
	min-width: 230px;
	min-height: 300px;
	display:flex;
	flex-flow: column nowrap;
	overflow:hidden;
	box-shadow: 0px -2px 10px 0px rgba(0,0,0,0.2);
	position:relative;
	z-index: 0;
	transition: all 250ms ease;
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
	width: 80%;
	max-width: 80%;
	transition: all 250ms ease;
	border-radius: 0px 0px 300px 300px;
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
	/* width: ${p => p.horizOpen ? '100%' : '40%'}; */
	border-radius: 0px 0px 10px 10px;
	height: 15px;
	transition: all 300ms ease;
`

export const VerticalButtonContainer = ExpandButtonContainer.extend`
	max-height:200px;
	border-radius: ${p => p.vertOpen ? '0px 0px 10px 10px' : '0px 50px 50px 0px'};
	width: 15px;
	height: 80%;
	margin-top: 40px;
	transition: all 250ms ease;
`

export const ButtonContainer = styled.div`
	height: ${p => p.horizOpen ? '40px' : '0px'};
	visibility: ${p => p.horizOpen ? 'visible' : 'hidden'};
	align-self: bottom;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-around;
	background: #D5D5D5;
	width: 100%;
	/* max-width: 200px; */
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
	transition: opacity 0.1s cubic-bezier(.87,-.41,.19,1.44);
`