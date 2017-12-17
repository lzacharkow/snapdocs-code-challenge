// Presentation component

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './styles.css';

import ListItem from './ListItem';

function EmployeesList({ employees }) {
	// Iterate through employees
	// hide inactive
	// show name age and email in list
	const filteredEmployees = _.chain(employees)
		.map((employee, key) => ({
			...employee,
			id: key,
		}))
		.filter(['active', true])
		.value();

	return (
		<div>
			{filteredEmployees.map((employee) => {
				return (
					<ListItem
						key={employee.id}
						id={employee.id}
						active={employee.active}
						name={employee.name}
						age={employee.age}
						email={employee.email}
					/>
				);
			})}
		</div>
	);
}

EmployeesList.propTypes = {
	// name: PropTypes.string.isRequired,
};

export default EmployeesList;
