import React, { Component, Redirect } from 'react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import PageNotFound from './components/PageNotFound'

class App extends Component {
	render() {
		return (
			<Router>
					<Switch>
							<Route exact path="/" component={Login} />
							<Route exact path="/landing" component={Landing} />
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/profile" component={Profile} />
							<Route component={PageNotFound} />
						</Switch>
			</Router>
		)
	}
}

export default App