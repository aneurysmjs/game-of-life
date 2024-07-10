
import genRandom from '@/utils/genRandom';
import cloneGrid from '@/utils/cloneGrid';

import type { GridType } from '@/components/shared/Grid/Grid';

export default function spawn(grid: GridType): GridType {
  const clonedGrid = cloneGrid(grid);
  grid.forEach((row, i) => {
    row.forEach((col, j) => {
      if (genRandom(4) === 1) {
        clonedGrid[i][j] = 1;
      }
    });
  });
  return clonedGrid;
}
