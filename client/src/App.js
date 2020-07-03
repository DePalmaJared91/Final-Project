import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import Landing from "./components/Landing"
import Login from "./components/Login"
import Register from "./components/Register"
import Studio from "./components/Studio"
import Upload from "./components/Upload"
import PageNotFound from "./components/PageNotFound"

class App extends Component {
  render() {
    return (
      <Router>
		<Switch>
			<Route exact path="/" component={Login} />
			{/* <Route exact path="/landing" component={Landing} /> */}
			<Route exact path="/register" component={Register} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/studio" component={Studio} />
			<Route exact path="/upload" component={Upload} />
			<Route component={PageNotFound} />
		</Switch>
      </Router>
    );
  }
}

export default App;
