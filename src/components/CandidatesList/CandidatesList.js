// Presentation component

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function CandidatesList({ employees }) {
	// Iterate through employees
	// hide inactive
	// show name age and email in list
	console.log('employees: ', employees);

	return (
		<div>
			{employees.map((employee) => {
				return (
					<CandidatesListCandidate
						key={employee.name}
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

function CandidatesListCandidate({
	id,
	active,
	name,
	age,
	email,
}) {
	return (
		<div>
			{id}<br />
			{active}<br />
			{name}<br />
			{age}<br />
			{email}
		</div>
	);
}

CandidatesList.propTypes = {
	// name: PropTypes.string.isRequired,
};

export default CandidatesList;
