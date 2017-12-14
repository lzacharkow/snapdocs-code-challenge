import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import our watchers, which also initilize Firebase.
import './firebase/watch';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
registerServiceWorker();
