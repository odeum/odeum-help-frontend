import styled from "styled-components"

export const overlayTransition = {
	entering: {
		position: 'fixed', width: '100%', height: '100%', alignItems: 'center',
		justifyContent: 'center', background: '#ffffff9a', zIndex: 5, top: 0, left: 0
	},
	entered: {
		position: 'fixed', width: '100%', height: '100%', alignItems: 'center',
		justifyContent: 'center', background: '#ffffff9a', zIndex: 5, top: 0, left: 0
	},
	exiting: {
		position: 'fixed', width: '100%', height: '100%', alignItems: 'center',
		justifyContent: 'center', background: '#ffffff22', zIndex: 5, top: 0, left: 0
	},
	exited: { position: 'relative', background: '#ffffff00' }
}

export const ContainerWHorizControlsTransitions = {
	entering: { width: '200px', height: '270px' },
	entered: { width: 'calc(100% - 120px)', height: '70%' },
	exiting: { width: '200px', height: '270px' },
	exited: { width: '200px', height: '270px' }
}

export const FormContainerTransitions = {
	entering: { width: '200px', height: '270px' },
	entered: { width: '100%', height: 'calc(100% - 60px)' },
	exiting: { width: '200px', height: '270px' },
	exited: { width: '200px', height: '270px' }
}

export const CompleteContainerTransitions = {
	entering: { width: '200px', height: '270px', alignItems: 'center', justifyContent: 'center' },
	entered: { width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },
	exiting: { width: '200px', height: '270px', alignItems: 'center', justifyContent: 'center' },
	exited: { width: '200px', height: '270px' }
}

export const CompleteContainer = styled.div`
	display: flex;
	flex-flow:row nowrap;
	margin: ${p => p.expand ? '0px' : '10px'};
	transition: all 270ms ease;
`

export const ContainerWHorizControls = styled.div`
	display:flex;
	flex-flow: column nowrap;
	align-items:center;
	margin:0;
	transition: all 270ms ease;
`

export const CardListContainer = styled.div`
	display:grid;
	/* display:-ms-grid; */
	grid-template-columns: ${p => 'repeat(' + Math.round(p.pageSize / 2) + ',1fr)'};
	grid-template-rows: 1fr 1fr;
	position: relative;
`

export const FormContainer = styled.div`
	border: 1px solid;
	border-right: 0px;
	border-bottom:0px;
	border-color: #e5e6e9 #dfe0e4 #d0d1d5;
	border-radius: 10px;
	/* min-width: 200px;
	min-height: 270px; */
	display:flex;
	flex-flow: column nowrap;
	overflow:hidden;
	box-shadow: 0px -2px 10px 0px rgba(0,0,0,0.2);
	position:relative;
	z-index: 0;
	transition: all 270ms ease;
	position:relative;
	&:before {
		content:"";
		background-image: url(${p => p.img});
		background-size: cover;
		height: 100%;
		z-index: -1;
		position: absolute;
		width: 100%;
		/* filter: ${p => p.expand ? '' : 'saturate(50%)'}; */
	}
	justify-content:flex-end;
`

export const Img = styled.img`
	height: 100%;
	width:100%;
`

export const FormImg = styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	/* background: #fff; */
	width: 100%;
	min-height:50px;
	max-height:130px;
	position:relative;
	overflow:hidden;
	flex:1;
`

export const Header = styled.div`
	/* background: white; */
	display: flex;
	align-items: center;
	font-size: 20px;
	padding: 5px;
	background:white;
	height:20%;
`

export const ProjectInfo = styled.div`
	/* background: white; */
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	width: 100%;
	padding: 5px;
	background:white;
	${p => p.expand ? `flex:1;` : ''};
	height:30%;
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
	transition: all 270ms ease;
	border-radius: 0px 0px 270px 270px;
	z-index:2;
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
	border-radius: 0px 0px 10px 10px;
	height: 15px;
	transition: all 270ms ease;
`

export const VerticalButtonContainer = ExpandButtonContainer.extend`
	max-height:200px;
	border-radius: ${p => p.vertOpen ? '0px 0px 10px 10px' : '0px 50px 50px 0px'};
	width: 15px;
	height: 40%;
	margin-top: 40px;
	transition: all 270ms ease;
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
	transition: all 270ms cubic-bezier(.87,-.41,.19,1.44);
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