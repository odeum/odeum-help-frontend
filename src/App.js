import React, { Component } from 'react'

// Framework imports
import {
	AppContainer,
	Header,
	MenuPanel,
	Menu,
	Tab,
	Footer, Protected, LoginForm, SetAppID, GetAppID
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
// import NewFormCard from './content/Card/NewCard'
import HelpNew from './content/HelpInputFields/NewHelpItemForm'
// import { Content } from 'content/Card/Content'
// import CardList from './content/Card/CardComponents/CardList'
import HelpList from './content/HelpInputFields/HelpList'


class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			helpID: 0,
			isLoggedIn: false
		}
	}
	componentDidMount = () => {
		SetAppID('help')
		console.log(GetAppID())

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
								{/* <CardList>
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
								</CardList> */}
								<HelpList/>
							</Tab>
							<Tab icon={'add_circle'} label={'Add new Help Item'} route={'/add-help-item'}>
								<HelpForm />
							</Tab>
							<Tab icon={'add_circle'} label={'Add New Help Item Form'} route={'/add-new-item'}>
								<HelpNew />
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


if (process.env.NODE_ENV !== 'production') {
	const { whyDidYouUpdate } = require('why-did-you-update')
	whyDidYouUpdate(React, { groupByComponent: true, collapseComponentGroups: true })
}