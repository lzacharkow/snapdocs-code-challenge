import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { EMPLOYEES_ROUTE } from '../../constants';

function ListItem({
	id,
	name,
	active,
	match,
}) {
	const classes = classnames('employee-list__table__row', {
		'employee-list__table__row--inactive': !active,
	});

	const activeMessage = active
		? 'Active'
		: 'Not active';

	return (
		<Link className={classes} to={`${EMPLOYEES_ROUTE}/${id}`}>
			<div className="employee-list__table__row__cell employee-list__table__row__cell--name">
				{name}
			</div>
			<div className="employee-list__table__row__cell employee-list__table__row__cell--status">
				{activeMessage}
			</div>
			<div className="employee-list__table__row__cell employee-list__table__row__cell--link link--primary">
				View<span> Employee</span>
			</div>
		</Link>
	);
}

ListItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
};

export default ListItem;
