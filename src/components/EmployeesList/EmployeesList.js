// Presentation component

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import ListItem from './ListItem';

function EmployeesList({
	isLoading,
	employees,
}) {

	const headings = (
		<div className="employee-list__table__row employee-list__table__row--headings">
			<div className="employee-list__table__row__heading employee-list__table__row__heading--name">
				Name
			</div>
			<div className="employee-list__table__row__heading employee-list__table__row__heading--status">
				Status
			</div>
			<div className="employee-list__table__row__heading employee-list__table__row__heading--link" />
		</div>
	);

	const rows = isLoading
		? <div className="employee-list__table__row">Loading...</div>
		: employees.map(employee => (
			<ListItem
				key={employee.id}
				id={employee.id}
				name={employee.name}
				active={employee.active}
			/>
		));

	return (
		<div className="employee-list__table">
			{headings}
			{rows}
		</div>
	);
}

EmployeesList.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	employees: PropTypes.arrayOf(PropTypes.shape({
		active: PropTypes.bool,
		bio: PropTypes.string,
		date_of_birth: PropTypes.number,
		email: PropTypes.string,
		name: PropTypes.string,
		id: PropTypes.string,
	})).isRequired,
};

export default EmployeesList;
