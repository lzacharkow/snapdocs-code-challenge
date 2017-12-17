import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

const onePreviousPage = [
	{
		label: 'A link',
		path: '/hello',
	},
];

const manyPreviousPages = [
	{
		label: 'A link',
		path: '/hello',
	},
	{
		label: 'Another link',
		path: '/hello/another',
	},
	{
		label: 'Yet another link',
		path: '/hello/another/page',
	},
];

storiesOf('Breadcrumbs', module)
  .add(
    'One previous page',
    () => (
			<Breadcrumbs
				paths={onePreviousPage}
				currentPage="Current Page"
			/>
		),
	)
	.add(
		'Many previous pages',
		() => (
			<Breadcrumbs
				paths={manyPreviousPages}
				currentPage="Current Page"
			/>
		),
	)
	.add(
    'No previous pages',
    () => (
			<Breadcrumbs
				paths={[]}
				currentPage="Current Page"
			/>
		),
	);
