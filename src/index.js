
import 'core-js/es6/map'
import 'core-js/es6/set'
import 'core-js/fn/string/includes'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import App from 'App'
import 'react-dates/initialize'

class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Route path='/' component={App} />
			</Router>
		)
	}
}
export default AppRouter

render(
	<AppRouter />,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./index'.default, () => {
		const NextApp = require('./index').default
		render(
			<NextApp />,
			document.getElementById('root')
		)
	})
}

registerServiceWorker()

