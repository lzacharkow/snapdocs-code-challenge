// Update firebase with new values.
/* eslint-disable import/prefer-default-export */

import { name } from './items';

export function updateName(newName) {
	name.set(newName);
}
