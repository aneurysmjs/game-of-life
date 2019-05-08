// @flow strict

import React from 'react';

import divideGrid from '/utils/divideGrid';

import { Grid } from './components/shared/Grid';
import { SIZE } from '/constants';

import './assets/scss/styles.scss';

const gridValue = divideGrid(SIZE);

const App = () => (
  <section>
    <h1 className="text-center">Game of Life</h1>
    <Grid
      rows={gridValue}
      cols={gridValue}
    />
  </section>
);

export default App;
