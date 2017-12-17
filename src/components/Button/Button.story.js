import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
	.add(
		'Primary',
		() => (
			<Button to="/button-world">Primary button</Button>
		),
	)
	.add(
		'Secondary',
		() => (
			<Button secondary to="/button-world">Secondary button</Button>
		),
	);
