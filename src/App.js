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
import { RenderFooterLabel, handleLink } from './framework/FooterLabel'

// Content imports
import Homepage from './content/Homepage/Homepage'
import Installation from './content/docs/Installation'
import Helppage from './content/Helppage/Helppage'

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
				<Header logo={'default'}/>
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


					{/* <Menu icon={'directions'} label={'Docs'} route={'/docs'}>
						<Tab icon={'cloud_download'} label={'Installation'} route={'/installation'}>
							<Installation />
						</Tab>
						<Tab icon={'language'} label={'Hello World'} route={'/hello-world'}>
							Hello World ...
						</Tab>
					</Menu>


 */}
				</MenuPanel>
				<Footer label={RenderFooterLabel} labelLink={handleLink()} helpID={'Messages ...'} />
			</AppContainer>
		)
	}
}

export default App
