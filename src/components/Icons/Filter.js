/* eslint-disable no-mixed-spaces-and-tabs */

import React from 'react';
import PropTypes from 'prop-types';

function Filter({ className }) {
	return (
		<svg className={className} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.9454 10">
			<path d="M9.4574,0H0.4881C0.0866,0-0.1426,0.4583,0.0984,0.7795l3.4014,4.5339v4.1995
				C3.4998,9.7819,3.7178,10,3.9869,10h1.9716c0.269,0,0.4872-0.2181,0.4872-0.4871V5.3133l3.4013-4.5338
				C10.088,0.4583,9.8588,0,9.4574,0z" />
		</svg>
	);
}

Filter.defaultProps = {
	className: '',
};

Filter.propTypes = {
	className: PropTypes.string,
};

export default Filter;
