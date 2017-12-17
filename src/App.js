import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import './styles/base-styles/index.css';
import { EMPLOYEES_ROUTE } from './constants';

import Header from './components/Header';
import EmployeesListRoute from './routes/EmployeesListRoute';
import EmployeeProfileRoute from './routes/EmployeeProfileRoute';

function App() {
	return (
		<Router>
			<div>
				<Header />

				<Switch>
					<Redirect exact from="/" to={EMPLOYEES_ROUTE} />

					<Route exact path={EMPLOYEES_ROUTE} component={EmployeesListRoute} />
					<Route path={`${EMPLOYEES_ROUTE}/:id`} component={EmployeeProfileRoute} />

					<Route render={() => <h1>4<span role="img" aria-label="404 cat">🐱</span>4</h1>} />
				</Switch>

			</div>
		</Router>
	);
}


export default App;
