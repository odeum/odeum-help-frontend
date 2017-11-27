import React, { Component } from 'react'

// Framework imports
import { 
	AppContainer,
	Header, 
	MenuPanel, 
	Menu,
	Tab,
	Footer } from 'odeum-app'

// Framework helper imports
import { FooterLabel, handleLink } from './framework/FooterLabel'

// Content imports
import Homepage from './content/Homepage/Homepage'
import Helppage from './content/Helppage/Helppage'
import FormPage from './content/Form/FormPage'

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			helpID: 0
		}
	}

	render() {
		return (
			<AppContainer>
				<Header />
				<MenuPanel>

					<Menu route={'/'} exact>
						<Homepage />
					</Menu>
				
					<Menu icon={'help'} label={'Help'} route={'/help'}>
						<Tab icon={'help'} label={'Help'} route={'/gethelp'}>
							<Helppage />
						</Tab>
						<Tab icon={'code'} label={'Tutorial'} route={'/tutorial'}>
							Tutorial ...
						</Tab>						
					</Menu>

					<Menu icon={'assignment'} label={'Form'} route={'/form'}>
						<Tab icon={'assignment'} label={'Form List'} route={'/formlist'}>
							<FormPage />
						</Tab>
						<Tab icon={'code'} label={'Tutorial'} route={'/tutorial'}>
							Tutorial ...
						</Tab>
					</Menu>

				</MenuPanel>
				<Footer label={FooterLabel} labelLink={handleLink()} helpID={'Messages ...'} />
			</AppContainer>
		)
	}
}

export default App
