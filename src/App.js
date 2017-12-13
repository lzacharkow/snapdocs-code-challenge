import React, { Component } from 'react';
import Sample from './components/_Sample/Sample';

import './styles/base-styles/index.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Sample name="waddup world 💋" />
			</div>
		);
	}
}

export default App;
