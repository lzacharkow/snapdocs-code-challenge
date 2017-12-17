import React from 'react';
import { storiesOf } from '@storybook/react';
import StatusBanner from './StatusBanner';

storiesOf('StatusBanner', module)
	.add(
		'Neutral',
		() => (
			<StatusBanner
				message="This is a neutral banner."
			/>
		),
	)
	.add(
		'Neutral with sub-message',
		() => (
			<StatusBanner
				message="This is a neutral banner."
				subMessage="This is a description."
			/>
		),
	)
	.add(
		'Error',
		() => (
			<StatusBanner
				error
				message="This is an error banner."
				subMessage={<span>This is the description of the error with a <a href="">link</a>.</span>}
			/>
		),
	);
