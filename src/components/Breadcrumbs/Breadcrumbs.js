// Presentation component

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

function Breadcrumbs({
	paths,
	currentPage,
}) {
	return (
		<div className="breadcrumbs">

			{paths.map(path => (
				<div key={path.path} className="breadcrumbs__breadcrumb">
					<Link to={path.path} className="link--primary">
						{path.label}
					</Link>
				</div>
			))}

			<div className="breadcrumbs__current-page">
				{currentPage}
			</div>

		</div>
	);
}

Breadcrumbs.propTypes = {
	paths: PropTypes.arrayOf(PropTypes.shape({
		path: PropTypes.string,
		label: PropTypes.string,
	})),
	currentPage: PropTypes.string.isRequired,
};

Breadcrumbs.defaultProps = {
	paths: [],
};

export default Breadcrumbs;
