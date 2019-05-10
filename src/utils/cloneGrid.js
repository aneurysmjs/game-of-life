// @flow strict

import type { GridType } from '/components/shared/Grid/Grid';

export default function cloneGrid(grid: GridType): GridType {
  return [...grid.map(r => [...r])];
}
