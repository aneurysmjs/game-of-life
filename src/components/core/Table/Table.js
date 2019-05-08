// @flow strict
import React from 'react';
import type { Node } from 'react';

import './Table.scss';

type PropsType = {
  children: Node,
  isFull: boolean,
};

const Table = ({ children, isFull }: PropsType) => (
  <div className={`table ${isFull ? 'table--full' : ''}`}>
    <div className="table__tbody">
      { children }
    </div>
  </div>
);

export default Table;
