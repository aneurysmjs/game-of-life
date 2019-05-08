// @flow strict

import React, { useState, useEffect } from 'react';

import divideGrid from '/utils/divideGrid';
import makeGrid from '/utils/makeGrid';
import genRandom from '/utils/genRandom';

import { SIZE } from '/constants';
import { Grid } from '/components/shared/Grid';
import { Toolbar } from '/components/shared/Toolbar';

import AppContext from '/AppContext';

import './assets/scss/styles.scss';

const size = divideGrid(SIZE);
const rows = size;
const cols = size;

const initialGrid = makeGrid(rows, cols, () => 0);

function App() {
  const [selected, setSeleted] = useState({id: '', i: 0, j: 0});
  const [grid, setGrid] = useState(initialGrid);
  const [generation, setGeneration] = useState(0);

  // get the indexes of the selected 'cell'
  const handle = (current) => {
    const { i, j } = current;
    const clonedGrid = [...grid.map(r => [...r])];
    // toggle cell's value
    clonedGrid[i][j] = !clonedGrid[i][j];
    // update grid
    setGrid(clonedGrid);

    setSeleted(current);

    return current;
  };

  const spawn = () => {
    const clonedGrid = [...grid.map(r => [...r])];
    grid.forEach((row, i) => {
      row.forEach((col, j) => {
        if (genRandom(4) === 1) {
          clonedGrid[i][j] = 1;
        }
      });
    });
    // update grid
    setGrid(clonedGrid);
  };

  useEffect(() => {
    spawn();
  }, [selected]);

  return (
    <section>
      <div>
        <AppContext.Provider value={{ handle }}>
          <h1 className="text-center">Game of Life</h1>
          <Toolbar />
          <Grid
            grid={grid}
          />
          <footer className="text-center mt-3">
            Generation: { generation }
          </footer>
        </AppContext.Provider>
      </div>
    </section>
  );
}

export default App;
