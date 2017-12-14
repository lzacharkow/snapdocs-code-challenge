// Import all redux reducers here.
// To create a new reducer, make a new file and import it here.

import { combineReducers } from 'redux';

import sample from './sample';
import employees from './employees';

export default combineReducers({
	sample,
	employees,
});
