// @flow strict

import * as React from 'react'
import { render } from 'react-dom'
import App from './App'

const app = document.querySelector('#app');

if (app) {
  render(<App />, app);
}
