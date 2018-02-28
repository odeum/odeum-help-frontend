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

// Framework helper imports
import { FooterLabel, handleLink } from './framework/FooterLabel'
// import theme from './framework/theme'
// import { Page/* , Login , LoginTester */ } from './framework/TestComponents'
// import Protected from './content/Login/Protected'
// import AuthExample from './framework/AutoExample'

// // Content imports
import Homepage from './content/Home/Homepage'
import HelpForm from './content/Help/HelpForm'
import NewFormCard from './content/Card/NewCard'
import HelpNew from './content/HelpInputFields/NewHelpItemForm'
// import { Content } from 'content/Card/Content'
import CardList from './content/Card/CardComponents/CardList'
import HelpList from './content/HelpInputFields/HelpList'
import Icon from 'odeum-ui/lib/components/Icon/Icon'
import CardContainer from './content/Card/CardComponents/CardContainer'
import mockData from './framework/Data'

// import ViewContainer from './content/Views/ViewContainer'

var _ = require('lodash')
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
	componentDidUpdate = (prevProps, prevState) => {
		console.log('bing')
		console.log(prevState)
		console.log(prevProps)
	}

	componentDidMount = async () => {
		// SetAppID('help')
		// console.log(GetAppID())
		// if (this.state.mockData === null)
		// this.setState({ mockData: mockData })
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
						{/* <ViewContainer pageSize={this.state.pageSize} children={this.state.mockData !== null ? this.state.mockData : undefined}>
							{/* {this.state.mockData !== null ? this.state.mockData.map((c, i) => {
								return <NewFormCard
									key={i}
									label={c.name}
									resp={c.responsible}
									date={c.date.toLocaleDateString()}
								/>
							}) : null}
						</ViewContainer> */}
					</Menu>
					<Menu label={'Card'}>
						<CardContainer> {/* Rename to ViewContainer */}
							<div style={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' }}>

								<Icon icon="search" />
								<select onChange={this.handlePageSize} value={this.state.pageSize}>
									{_.range(2, 13).map(i =>
										<option key={i} value={i}>{i}</option>
									)}
								</select>
							</div>
							<CardList pageSize={this.state.pageSize}>
								{/* {_.range(1, 151).map(i => {
									return <NewFormCard
										key={i}
										label={i}
										resp={i}
										date={i}
										regs={i}
									/>
								})
								} */}
								{this.state.mockData !== null ? this.state.mockData.map((c, i) => {
									// console.log(c)
									return <NewFormCard
										key={i}
										img={'https://picsum.photos/1920/1404/?random=' + i}
										label={c.name}
										resp={c.responsible}
										date={c.date.toLocaleDateString()}
									/>
								}
								) : null}
							</CardList>
						</CardContainer>
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


if (process.env.NODE_ENV !== 'production') {
	const { whyDidYouUpdate } = require('why-did-you-update')
	whyDidYouUpdate(React, { groupByComponent: true, collapseComponentGroups: true })
}