// @flow strict
import React, { useState, useEffect } from 'react';

import divideGrid from '/utils/divideGrid';
import makeGrid from '/utils/makeGrid';
import genRandom from '/utils/genRandom';
import nextGeneration from '/utils/nextGeneration';
import cloneGrid from '/utils/cloneGrid';
import spawn from '/utils/spawn';

import { SIZE } from '/constants';
import { Grid } from '/components/shared/Grid';
import { Toolbar } from '/components/shared/Toolbar';

import AppContext from '/AppContext';
import type { SelectedType } from '/AppContext';

import './assets/scss/styles.scss';

const result = divideGrid(SIZE);
const speed = 300;

const initialGrid = makeGrid(result.rows, result.cols, () => 0);

let intervalId;

function App() {
  const [selected, setSeleted] = useState({id: '', i: 0, j: 0});
  const [grid, setGrid] = useState(() => initialGrid);
  let [generation, setGeneration] = useState(0);
  let [size, setSize] = useState(SIZE);

  // get the indexes of the selected 'cell'
  const handle = (current: SelectedType): SelectedType => {
    const { i, j } = current;
    const clonedGrid = cloneGrid(grid);
    // toggle cell's value and coerce back to number using "+"
    clonedGrid[i][j] = (+!clonedGrid[i][j]);
    // update grid
    setGrid(clonedGrid);

    setSeleted(current);

    return current;
  };

  const start = (): void => {
    const clonedGrid = cloneGrid(grid);
    const { rows, cols } = divideGrid(size);
    setGrid(nextGeneration(clonedGrid, rows, cols));
    setGeneration(generation += 1);
  };

  const spawnGrid = () => {
    const spawnedGrid = spawn(grid);
    const { rows, cols } = divideGrid(size);
    setGrid(nextGeneration(spawnedGrid, rows, cols));
  };

  const play = () => {
    clearInterval(intervalId);
    intervalId = setInterval(start, speed);
  };

  const pause = (): void => {
    clearInterval(intervalId);
  };

  const stop = (): void => {
    clearInterval(intervalId);
    setGrid(initialGrid);
    setSize(SIZE);
    setGeneration(0);
  };

  const buttonsHandler = {
    play,
    pause,
    stop,
    spawnGrid,
  };

  const handleClick = (type: string): void => {
    buttonsHandler[type]();
  };

  const handleSize = (option) => {
    const { rows, cols } = divideGrid(option.value);    
    setSize(option.value);
    setGrid(makeGrid(rows, cols, () => 0));
  };

  return (
    <section>
      <div>
        <AppContext.Provider value={{ handle }}>
          <h1 className="text-center">Game of Life</h1>
          <Toolbar
            onClick={handleClick}
            onSize={handleSize}
          />
          <Grid
            grid={grid}
            size={size}
          />
          <footer className="text-center mt-3">
            Generations: { generation }
          </footer>
        </AppContext.Provider>
      </div>
    </section>
  );
}

export default App;
