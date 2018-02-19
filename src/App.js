import React, { Component } from 'react'

// Framework imports
import {
	AppContainer,
	Header,
	MenuPanel,
	Menu,
	Tab,
	Footer, Protected, LoginForm
} from 'odeum-app'

// Framework helper imports
import { FooterLabel, handleLink } from './framework/FooterLabel'
// import theme from './framework/theme'
// import { Page/* , Login , LoginTester */ } from './framework/TestComponents'
// import Protected from './content/Login/Protected'
// import AuthExample from './framework/AutoExample'

// // Content imports
import Homepage from './content/Home/Homepage'
import HelpForm from './content/Help/HelpForm'
// import FormCard from './content/Card/FormCard'
import NewFormCard from './content/Card/NewCard'
// import { Content } from 'content/Card/Content'
// import HelpPage from './content/HelpPage/HelpPage'
// import FormPage from './content/Form/FormPage'
// import TutorialPage from './content/Tutorial/TutorialPage'
import CardList from './content/Card/CardComponents/CardList'


class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			helpID: 0,
			isLoggedIn: false
		}
	}

	handleLogin = () => {
		this.setState({ isLoggedIn: true })
	}

	render() {
		const { isLoggedIn } = this.state
		return (
			<AppContainer>
				<Header />

				<MenuPanel
					// login={true}
					// isLoggedIn={isLoggedIn}
					// redirectTo={'/login'}
					arrows={true}
				>

					<Menu route={'/'}>
						<Homepage />
					</Menu>
					{LoginForm(isLoggedIn, this.handleLogin)}
					<Protected>
						<Menu icon={'help'} label={'Help'} route={'/help'}>
							<Tab icon={'help'} label={'Help Items'} route={'/'} exact>
								{/* <div style={{ display: 'flex', flexFlow: 'row nowrap', width: '100%', height: '100%' }}> */}
								<CardList>
									<NewFormCard
										label={'Andrei'}
										resp={'Christian'}
										date={'18.02.2018'}
										regs={100}

									/>
									<NewFormCard
										label={'Dom'}
										resp={'Christian'}
										date={'18.02.2018'}
										regs={100}
									/>
									<NewFormCard
										label={'Andrei'}
										resp={'Christian'}
										date={'18.02.2018'}
										regs={100}
									/>
									<NewFormCard
										label={'Dom'}
										resp={'Christian'}
										date={'18.02.2018'}
										regs={100}
									/>
								</CardList>
								{/* </div> */}
								{/* <FormCard icon1={'add_circle_outline'}
									icon2={'mode_edit'}
									icon3={'share'}
									icon4={'library_add'}
									iconSize={60}
									color={'#5E5E5E'}
									onClick1={() => console.log('Hello')}
									onClick2={() => console.log('Hello')}
									onClick3={() => console.log('Hello')}
									onClick4={() => console.log('Hello')}

								>
									<Content
										headertext={'Header'}
										activeHeader={'Active'}
										registrationHeader={'Registration'}
										responsible={'Responsible'}
										date={'2017/02/20'}
										number={100}
										people={'Kasper Frida'}
										progressOut={5}
									// OutOf={this.state.outOF}
									// progressMeter={}
									/>
								</FormCard> */}
							</Tab>
							<Tab icon={'add_circle'} label={'Add new Help Item'} route={'/add-help-item'}>
								<HelpForm />
							</Tab>
						</Menu>
					</Protected>
				</MenuPanel>

				<Footer label={FooterLabel} labelLink={handleLink()} helpID={'Logged in: ' + this.state.isLoggedIn} />
			</AppContainer>
		)
	}
}

export default App


// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update')
// 	whyDidYouUpdate(React, { groupByComponent: true, collapseComponentGroups: true })
// }