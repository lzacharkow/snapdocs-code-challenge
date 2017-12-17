// A sample route

import React from 'react';
import './styles.css';

import EmployeesList from '../../components/EmployeesList';
import Button from '../../components/Button';

function EmployeesListRoute() {
	return (
		<div className="page-inner-wrapper page-inner-wrapper--employee-list">
			<div className="employee-list__heading">
				<h1>Purple Company’s Employees</h1>
				<Button secondary>Add New Employee</Button>
			</div>
			<EmployeesList />
		</div>
	);
}

export default EmployeesListRoute;
