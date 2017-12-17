import React from 'react';
import { Link } from 'react-router-dom';
import { EMPLOYEES_ROUTE } from '../../constants';

function ListItem({
	id,
	active,
	name,
	age,
	email,
	match,
}) {
	return (
		<Link to={`${EMPLOYEES_ROUTE}/${id}`}>
			{id}<br />
			{active}<br />
			{name}<br />
			{age}<br />
			{email}
			<hr />
		</Link>
	);
}

export default ListItem;
