import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';

import SampleRoute from './routes/_SampleRoute';
import './styles/base-styles/index.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/" exact render={() => (
						<div className="page-wrapper">
							<h1>Welcome to the root!</h1>
							<Link to="/sample">Redux sample</Link>
						</div>
					)} />
					<Route path="/sample" exact component={SampleRoute} />
				</div>
			</Router>
		);
	}
}


export default App;
