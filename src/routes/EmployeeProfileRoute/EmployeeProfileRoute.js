// A sample route

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import EmployeeProfile from '../../components/EmployeeProfile';
import Breadcrumbs from '../../components/Breadcrumbs';
import { EMPLOYEES_ROUTE } from '../../constants';

function EmployeeProfileRoute({
	isLoading,
	employeeName,
	match
}) {
	const breadcrumbs = {
		paths: [
			{
				label: 'All Employees',
				path: EMPLOYEES_ROUTE,
			},
		],
		currentPage: isLoading ? 'Loading...' : employeeName,
	};

	console.log(breadcrumbs);

	return (
		<div className="page-inner-wrapper page-inner-wrapper--employee-profile">
			<Breadcrumbs
				paths={breadcrumbs.paths}
				currentPage={breadcrumbs.currentPage}
			/>
			<EmployeeProfile id={match.params.id} />
		</div>
	);
}

EmployeeProfileRoute.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	employeeName: PropTypes.string,
};

EmployeeProfileRoute.defaultProps = {
	employeeName: '',
};

export default EmployeeProfileRoute;
