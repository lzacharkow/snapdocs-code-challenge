// Presentation component

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { updateName } from '../../firebase/update';

function Sample({ name }) {
	return (
		<div className="page-wrapper">
			<h1 className="sample__heading">
				My cat’s name is {name}.
			</h1>

			<label className="sample__input__label" htmlFor="cat-name">
				Enter a new name:
			</label>

			<input
				id="cat-name"
				type="text"
				onChange={(e) => { updateName(e.target.value); }}
			/>
		</div>
	);
}

Sample.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Sample;
