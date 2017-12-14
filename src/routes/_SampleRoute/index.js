// A sample route

import React from 'react';
import { Link } from 'react-router-dom';

function SampleRoute() {
	return (
		<div className="page-wrapper">
			<h1>Welcome to a sample route!</h1>
			<Link to="/">Go back</Link>
		</div>
	);
}

export default SampleRoute;
