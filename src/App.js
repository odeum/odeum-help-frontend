import React, { Component } from 'react'

// Framework imports
import {
	AppContainer,
	Header,
	MenuPanel,
	Menu,
	Tab,
	Footer, Protected, LoginForm/* , SetAppID, GetAppID */
} from 'odeum-app'
import moment from 'moment'
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
// import Icon from 'odeum-ui/lib/components/Icon/Icon'
// import CardContainer from './content/Card/CardComponents/CardContainer'
import mockData from './framework/Data'

import ViewContainer from './content/Views/ViewContainer'
import DayPickerRangeControllerWrapper from 'content/Views/Components/DatePicker'
import FormCard from './content/Card/FormCardV2'
import { CardListContainer } from 'content/Views/ViewStyles';

moment.locale('da')
// var _ = require('lodash')

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			helpID: 0,
			isLoggedIn: false,
			pageSize: 8,
			mockData: mockData
		}
	}

	handleLogin = () => {
		this.setState({ isLoggedIn: true })
	}
	handlePageSize = (e) => {
		this.setState({ pageSize: parseInt(e.target.value, 10) })
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
					<Menu label={'Cardv2'}>

						<CardListContainer pageSize={8}>
							<FormCard />
							<FormCard />
							<FormCard />
							<FormCard />
						</CardListContainer>
					</Menu>
					<Menu label={'Card'}>
						<Tab icon={'view_module'} label={'Cards'} route={'/'} exact>
							<ViewContainer items={this.state.mockData} />
						</Tab>
					</Menu>
					<Menu label={'DatePicker'}>
						<DayPickerRangeControllerWrapper
						// initialStartDate={moment('3/7/2018')}
						// initialEndDate={moment('3/13/2018')}
						/>
					</Menu>
					{LoginForm(isLoggedIn, this.handleLogin)}
					<Protected>
						<Menu icon={'help'} label={'Help'} route={'/help'}>
							<Tab icon={'help'} label={'Help Items'} route={'/'} exact>
								<HelpList />
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


// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update')
// 	whyDidYouUpdate(React, { groupByComponent: true, collapseComponentGroups: true })
// }