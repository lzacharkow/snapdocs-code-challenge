// A sample route

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import EmployeesList from '../../components/EmployeesList';


function EmployeesListRoute() {
	return (
		<div className="page-wrapper">
			<Header />
			<h1>Employees list</h1>
			<EmployeesList />
		</div>
	);
}

export default EmployeesListRoute;
