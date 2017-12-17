/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';
import '../src/styles/base-styles/index.css';

const req = require.context('../src', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
