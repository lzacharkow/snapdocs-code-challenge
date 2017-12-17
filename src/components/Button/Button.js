// Presentation component

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './styles.css';

function Button({
	href,
	secondary,
	children,
}) {

	const classes = classnames('button', {
		'button--secondary': secondary,
	});

	return (
		<Link to={href} className={classes}>
			{children}
		</Link>
	);
}

Button.propTypes = {
	href: PropTypes.string,
	secondary: PropTypes.bool,
	children: PropTypes.node,
};

Button.defaultProps = {
	href: '',
	secondary: false,
	children: 'Default button text',
};

export default Button;
