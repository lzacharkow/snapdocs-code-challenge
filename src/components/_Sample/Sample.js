import React from 'react';
import './styles.css';

function Sample({ name }) {
	return (
		<div>
			<h1 className="sample__heading">{name}</h1>
			<p className="sample__paragraph">This is the paragraph.</p>
		</div>
	);
}

Sample.defaultProps = {
	name: 'Sample',
};

export default Sample;
