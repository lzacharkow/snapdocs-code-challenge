import React from 'react';

function CandidatesListCandidate({
	id,
	active,
	name,
	age,
	email,
}) {
	return (
		<Link to={`/${id}`}>
			{id}<br />
			{active}<br />
			{name}<br />
			{age}<br />
			{email}
			<hr />
		</Link>
	);
}

export default CandidatesListCandidate;
