import { useContext, useId, type MouseEventHandler, type FC } from 'react';

import has from 'ramda/src/has';
import allPass from 'ramda/src/allPass';

import { SIZE } from '@/constants';
import AppContext, { type SelectedType } from '@/AppContext';
import { Table, Tr, Td } from '@/components/core/Table';

const on = '#2c3e50';
const off = '#ffffff';

export type GridType = Array<Array<number>>;

type GridProps = {
  grid: Array<Array<number>>;
  size?: number;
};

const hasCoords = [has('col'), has('row')];

const getCoords = (coords: { col: string; row: string }): SelectedType | undefined => {
  // Check if the coords object has both col and row as strings
  const col = typeof coords.col === 'string' ? +coords.col : undefined;
  const row = typeof coords.row === 'string' ? +coords.row : undefined;

  // Return the object only if both col and row are defined
  if (col !== undefined && row !== undefined) {
    return { col, row };
  }

  // Return undefined if either col or row is not present or not a string
  return undefined;
};

const Grid: FC<GridProps> = ({ grid, size }) => {
  const { handle } = useContext(AppContext);
  const id = useId();

  const gridSize = `${size ? size : SIZE}px`;

  const handleClick: MouseEventHandler = (evt): void => {
    const { target } = evt;

    if (target instanceof HTMLDivElement && allPass(hasCoords)(target.dataset)) {
      // const coords = { ...target.dataset };
      const coords = getCoords(target.dataset);

      if (coords) {
        handle(coords);
      }
    }
  };

  return (
    <div
      style={{
        height: gridSize,
        width: gridSize,
      }}
      className="my-0 mx-auto"
      onClick={handleClick}
    >
      <Table isFull>
        {grid.map((row, i) => (
          <Tr key={`${id}-${i}`}>
            {row.map((col, j) => (
              <Td
                key={`${id}-${j}`}
                style={{
                  background: col ? on : off,
                }}
                col={i}
                row={j}
              />
            ))}
          </Tr>
        ))}
      </Table>
    </div>
  );
};

export default Grid;
