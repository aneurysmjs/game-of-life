// @flow strict
import React from 'react';
// $FlowIgnore
import uuidv1 from 'uuid/v1';

import { SIZE } from '/constants';
import makeGrid from '/utils/makeGrid';
import genRandom from '/utils/genRandom';

import { Table, Tr, Td } from '/components/core/Table';

import './Grid.scss';

const on = '#2c3e50';
const off = '#ffffff';

type PropsType = {
  rows: number,
  cols: number,
};

function Grid({ rows, cols }: PropsType) {
  let grid = makeGrid(rows, cols, genRandom);

  return (
    <div
      style={{
        height: `${SIZE}px`,
        width: `${SIZE}px`,
      }}
      className="grid"
    >
      <Table isFull>
        {grid.map(row => (
          <Tr key={uuidv1()}>
            {row.map(col => (
              <Td
                key={uuidv1()}
                style={{
                  background: col ? on : off,
                }}
              />
            ))}
          </Tr>
        ))}
      </Table>
    </div>
  );
};

export default Grid;
