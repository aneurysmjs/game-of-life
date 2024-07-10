

import type { ReactNode } from 'react';

type PropsType = {
  children?: ReactNode,
  style?: {
    [k: string]: string | number
  },
  col: number,
  row: number,
};

const Td = ({
  children,
  style,
  col,
  row,
}: PropsType) => (
  <div
    style={style || {}}
    className="table__td"
    data-col={col}
    data-row={row}
  >
    { children }
  </div>
);

export default Td;
