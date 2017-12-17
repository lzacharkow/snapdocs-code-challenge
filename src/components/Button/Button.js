// Presentation component

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './styles.css';

function Button({
	href,
	callback,
	secondary,
	children,
}) {

	const classes = classnames('button', {
		'button--secondary': secondary,
	});

	if (href) {
		return (
			<Link to={href} className={classes}>
				{children}
			</Link>
		);
	}

	return (
		<button className={classes} onClick={callback()}>
			{children}
		</button>
	);
}

Button.propTypes = {
	href: PropTypes.string,
	callback: PropTypes.func,
	secondary: PropTypes.bool,
	children: PropTypes.node,
};

Button.defaultProps = {
	href: '',
	callback: () => null,
	secondary: false,
	children: 'Default button text',
};

export default Button;
