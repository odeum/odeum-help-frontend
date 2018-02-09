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
// import HelpPage from './content/HelpPage/HelpPage'
// import FormPage from './content/Form/FormPage'
// import TutorialPage from './content/Tutorial/TutorialPage'



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
								Test
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

