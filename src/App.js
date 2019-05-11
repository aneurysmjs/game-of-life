// @flow strict
import React, { useState } from 'react';

import divideGrid from '/utils/divideGrid';
import makeGrid from '/utils/makeGrid';
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
const speed = 200;

const initialGrid = makeGrid(result.rows, result.cols, () => 0);

let intervalId;

type ButtonsHandlerType = {
  play: () => void,
  pause: () => void,
  stop: () => void,
  spawnGrid: () => void,
};

function App() {
  const [selected, setSeleted] = useState({col: 0, row: 0});
  const [grid, setGrid] = useState(() => initialGrid);  
  const [size, setSize] = useState(SIZE);
  let [generation, setGeneration] = useState(0);

  // get the indexes of the selected 'cell'
  const handle = (current: SelectedType): SelectedType => {
    const { col, row } = current;
    const clonedGrid = cloneGrid(grid);
    // toggle cell's value and coerce back to number using "+"
    clonedGrid[col][row] = (+!clonedGrid[col][row]);
    // update grid
    setGrid(clonedGrid);

    setSeleted(current);

    return current;
  };

  const start = (): void => {
    const { rows, cols } = divideGrid(size);
    // get the previous updated grid, so we avoid the same grid
    // on every tick of the interval
    setGrid(prevGrid => nextGeneration(prevGrid, rows, cols));
    setGeneration(generation += 1);
  };

  const spawnGrid = (): void => {
    const spawnedGrid = spawn(grid);
    const { rows, cols } = divideGrid(size);
    setGrid(nextGeneration(spawnedGrid, rows, cols));
  };

  const play = (): void => {
    clearInterval(intervalId);
    intervalId = setInterval(start, speed);
  };

  const pause = (): void => {
    clearInterval(intervalId);
  };

  const stop = (): void => {
    clearInterval(intervalId);
    setGrid(initialGrid);
    const { rows, cols } = divideGrid(size);
    setGrid(makeGrid(rows, cols, () => 0));
    setGeneration(0);
  };

  const buttonsHandler: ButtonsHandlerType = {
    play,
    pause,
    stop,
    spawnGrid,
  };

  const handleClick = (type: string): void => {
    buttonsHandler[type]();
  };

  const handleSize = (option): void => {
    stop();
    const { rows, cols } = divideGrid(option.value);    
    setSize(option.value);
    setGrid(makeGrid(rows, cols, () => 0));
  };

  return (
    <section>
      <div className="mt-3">
        <AppContext.Provider value={{ handle }}>
          <h1 className="text-center display-3">Game of Life</h1>
          <Toolbar
            onClick={handleClick}
            onSize={handleSize}
          />
          <div className="text-center my-3">
            <strong>Generations:</strong> { generation }
          </div>
          <div className="d-flex">
            <Grid
              grid={grid}
              size={size}
            />
          </div>
        </AppContext.Provider>
      </div>
      <div className="mb-5" />
    </section>
  );
}

export default App;
