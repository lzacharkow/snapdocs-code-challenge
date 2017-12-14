// Watch firebase for changes and update redux to match.
/* eslint-disable import/prefer-default-export */

import store from '../store';
import { name } from './items';
import { setSampleName } from '../actions/sample';

name.on('value', (dataSnapshot) => {
	store.dispatch(setSampleName(dataSnapshot.val()));
});
