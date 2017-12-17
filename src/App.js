import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Sample from './components/_Sample';
import SampleRoute from './routes/_SampleRoute';

import EmployeesListRoute from './routes/EmployeesListRoute';
import EmployeeProfileRoute from './routes/EmployeeProfileRoute';
import './styles/base-styles/index.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={EmployeesListRoute} />
				<Route path="/:id" component={EmployeeProfileRoute} />
				<Route render={() => <h1>4🐱4</h1>} />
			</Switch>
		</Router>
	);
}


export default App;
