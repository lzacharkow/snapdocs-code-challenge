/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/styles/base-styles/index.css';

const req = require.context('../src', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(story => (
  <Router>
    {story()}
  </Router>
));

configure(loadStories, module);
