// A sample route

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import CandidatesList from '../../components/CandidatesList';


function CandidatesRoute() {
	return (
		<div className="page-wrapper">
			<Header />
			<h1>Candidates list</h1>
			<CandidatesList />
		</div>
	);
}

export default CandidatesRoute;
