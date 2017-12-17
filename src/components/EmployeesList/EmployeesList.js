// Presentation component

import React from 'react';
import './styles.css';

import ListItem from './ListItem';

function EmployeesList({ employees }) {
	return (
		<div>
			{employees.map(employee => (
				<ListItem
					key={employee.id}
					id={employee.id}
					active={employee.active}
					name={employee.name}
					age={employee.age}
					email={employee.email}
				/>
			))}
		</div>
	);
}

EmployeesList.propTypes = {
	// name: PropTypes.string.isRequired,
};

export default EmployeesList;
