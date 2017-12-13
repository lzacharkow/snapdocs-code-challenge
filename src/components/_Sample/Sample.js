import React from 'react';
import './styles.css';

function Sample({ name, onChangeHandler }) {
	return (
		<div className="sample">
			<h1 className="sample__heading">
				My cat’s name is {name}.
			</h1>

			<label className="sample__input__label" htmlFor="cat-name">
				Enter a new name:
			</label>
			<input
				id="cat-name"
				type="text"
				onChange={onChangeHandler}
			/>
		</div>
	);
}

// Sample.defaultProps = {
// 	...
// };
//
// Sample.propTypes = {
// 	...
// };

export default Sample;
