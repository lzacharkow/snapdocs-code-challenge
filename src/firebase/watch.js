// Watch firebase for changes and update redux to match.
/* eslint-disable import/prefer-default-export */

import store from '../store';
import { employees } from './items';
import { setEmployees } from '../actions/employees';

employees.on('value', (dataSnapshot) => {
	store.dispatch(setEmployees(dataSnapshot.val()));
});
