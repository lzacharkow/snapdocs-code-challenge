import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';

import Sample from './components/_Sample';
import './styles/base-styles/index.css';


function Home() {
	return (
		<div className="page-wrapper">
			<h1>Welcome to the root!</h1>
			<Link to="/sample">Redux sample</Link>
		</div>
	);
}

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/" exact component={Home} />
					<Route path="/sample" exact component={Sample} />
				</div>
			</Router>
		);
	}
}


export default App;
