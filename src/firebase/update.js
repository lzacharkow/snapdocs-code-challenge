// Update firebase with new values.

import { name } from './items';

export function updateName(newName) {
	name.set(newName);
}
