// A sample route

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import EmployeeProfile from '../../components/EmployeeProfile';

function EmployeeProfileRoute({ match }) {
	return (
		<div className="page-wrapper">
			<Header />
			<h1>Single Employee</h1>
			<EmployeeProfile id={match.params.id} />
		</div>
	);
}

export default EmployeeProfileRoute;
