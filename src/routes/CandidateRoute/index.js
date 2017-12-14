// A sample route

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function CandidateRoute({ match }) {
	return (
		<div className="page-wrapper">
			<Header />
			<h1>Single Candidate</h1>
			{match.params.id}
			<br />
      	// TODO: Add a candidate profile
		</div>
	);
}

export default CandidateRoute;
