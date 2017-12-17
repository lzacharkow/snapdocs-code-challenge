// A sample route

import React from 'react';
import EmployeeProfile from '../../components/EmployeeProfile';

function EmployeeProfileRoute({ match }) {
	return (
		<div className="page-inner-wrapper">
			<h1>Single Employee</h1>
			<EmployeeProfile id={match.params.id} />
		</div>
	);
}

export default EmployeeProfileRoute;
