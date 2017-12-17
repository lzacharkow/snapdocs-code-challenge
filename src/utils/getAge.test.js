import moment from 'moment';
import getAge from './getAge';

it('returns age', () => {
	// MS
	const now = moment(1513548016000);

	// Epoch timestamps
	const aug_12_1990 = 650498340;
	const jul_16_1989 = 616629616;

	expect(getAge(aug_12_1990, now)).toBe(27);
	expect(getAge(jul_16_1989, now)).toBe(28);
});
