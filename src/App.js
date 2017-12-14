import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Sample from './components/_Sample';
import SampleRoute from './routes/_SampleRoute';

import CandidatesRoute from './routes/CandidatesRoute';
import CandidateRoute from './routes/CandidateRoute';
import './styles/base-styles/index.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={CandidatesRoute} />
				<Route path="/:id" component={CandidateRoute} />
				<Route path="/sample-route" component={SampleRoute} />
				<Route render={() => <h1>4🐱4</h1>} />
			</Switch>
		</Router>
	);
}


export default App;
