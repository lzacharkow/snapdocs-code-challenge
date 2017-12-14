import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk),
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker();
