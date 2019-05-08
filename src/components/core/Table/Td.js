// @flow strict
import React from 'react';
import type { Node } from 'react';
type PropsType = {
  children?: Node,
  style?: {
    [string]: string | number
  },
  onClick: () => *
};

const Td = ({ children, style, onClick }: PropsType) => (
  <div
    style={style || {}}
    className="table__td"
    onClick={onClick}
  >
    { children }
  </div>
);

export default Td;
