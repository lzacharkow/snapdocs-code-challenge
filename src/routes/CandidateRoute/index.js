// A sample route

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import CandidateProfile from '../../components/CandidateProfile';

function CandidateRoute({ match }) {
	return (
		<div className="page-wrapper">
			<Header />
			<h1>Single Candidate</h1>
			<CandidateProfile id={match.params.id} />
		</div>
	);
}

export default CandidateRoute;
