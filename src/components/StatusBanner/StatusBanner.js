// Presentation component

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.css';

import { Warning } from '../Icons';

function StatusBanner({
	message,
	subMessage,
	error,
}) {

	const classes = classnames('status-banner', {
		'status-banner--error': error,
	});

	const messageIcon = error
		? <Warning className="status-banner__message__icon" />
		: null;

	const subMessageElement = subMessage
		? <p className="status-banner__sub-message">{subMessage}</p>
		: null;

	return (
		<div className={classes}>
			<p className="status-banner__message">
				{messageIcon}
				{message}
			</p>
			{subMessageElement}
		</div>
	);
}

StatusBanner.propTypes = {
	message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	subMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	error: PropTypes.bool,
};

StatusBanner.defaultProps = {
	subMessage: '',
	error: false,
};

export default StatusBanner;
