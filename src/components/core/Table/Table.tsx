
import type { ReactNode } from 'react';

import './Table.css';

type PropsType = {
  children: ReactNode,
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
