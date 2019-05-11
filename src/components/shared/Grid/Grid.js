// @flow strict
import React, { useContext } from 'react';
// $FlowIgnore
import has from 'ramda/src/has';
// $FlowIgnore
import allPass from 'ramda/src/allPass';
// $FlowIgnore
import uuidv1 from 'uuid/v1';

import { SIZE } from '/constants';
import makeGrid from '/utils/makeGrid';

import AppContext from '/AppContext';

import { Table, Tr, Td } from '/components/core/Table';

import './Grid.scss';

const on = '#2c3e50';
const off = '#ffffff';

export type GridType = Array<Array<number>>;
type PropsType = {
  grid: Array<Array<number>>,
  size?: number,
};

function Grid({ grid, size }: PropsType) {
  const { handle } = useContext(AppContext);
  const gridSize = `${size ? size : SIZE}px`;

  const handleClick = (evt: SyntheticMouseEvent<HTMLDivElement>): void => {    
    const { target } = evt;
    const hasCoords = [has('col'), has('row')];    
    if (target instanceof HTMLDivElement && allPass(hasCoords)(target.dataset)) {
      handle({ ...target.dataset });
    }
  };

  return (
    <div
      style={{
        height: gridSize,
        width: gridSize,
      }}
      className="grid"
      onClick={handleClick}
    >
      <Table isFull>
        {grid.map((row, i) => (
          <Tr key={uuidv1()}>
            {row.map((col, j) => {
              const id = uuidv1();
              return (
                <Td
                  key={id}
                  style={{
                    background: col ? on : off,
                  }}
                  col={i}
                  row={j}
                />
              );
            })}
          </Tr>
        ))}
      </Table>
    </div>
  );
};

export default Grid;
