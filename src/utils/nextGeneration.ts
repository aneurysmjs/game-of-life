

import type { GridType } from '@/components/shared/Grid/Grid';
import cloneGrid from '@/utils/cloneGrid';

export default function nextGeneration(
  grid: GridType,
  ROWS: number,
  COLS: number,
): GridType {
  // copy grid
  const nextGrid = cloneGrid(grid);
  // nested-loop iteraction to find the 'cell'
  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[row].length; col += 1) {
      // itereation's current 'cell'
      const cell = grid[row][col];
      // set neighbours for current cell
      let neighbours = 0;
      // find the neighbours relative the current 'cell'.
      // so we can threated as a 3x3 grid.
      for (let i = -1; i < 2; i += 1) {
        for (let j = -1; j < 2; j += 1) {
          // skip since the current 'cell' since is itself.
          if (i === 0 && j === 0) {
            continue;
          }
          // check if we're outside of the boundary of the grid
          const xCell = row + i;
          const yCell = col + j;
          // here we deal with the edges of the grid
          if (xCell >= 0 && yCell >= 0 && xCell < ROWS && yCell < COLS) {
            // if there's is a 0, not living neighbour, otherwise there's living neighbour
            const currentNeighbour = grid[row + i][col + j];
            neighbours += currentNeighbour;
          }
        }
      }

      // rules
      // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
      if (cell === 1 && neighbours < 2) {
        // we don't do it on grid since is what we're lopping through,
        // it should be on the next generation's grid
        nextGrid[row][col] = 0;

        // Any live cell with more than three live neighbours dies, as if by overpopulation.
      } else if (cell === 1 && neighbours > 3) {
        nextGrid[row][col] = 0;

        // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      } else if (cell === 0 && neighbours === 3) {
        nextGrid[row][col] = 1;
      } // else {
      // there's not need for an 'else' case because:
      // Any live cell with two or three live neighbours lives on to the next generation.
      // }
    }
  }
  return nextGrid;
}
