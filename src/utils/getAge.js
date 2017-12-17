import moment from 'moment';

function getAge(dob, now = moment()) {
	if (!dob) {
		return null;
	}

	// Convert Epoch to MS
	const dobToMs = dob*1000;

	return moment(now).diff(dobToMs, 'years');
}

export default getAge;
