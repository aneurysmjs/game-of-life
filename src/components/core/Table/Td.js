// @flow strict
import React from 'react';
import type { Node } from 'react';
type PropsType = {
  children?: Node,
  style: {
    [string]: string | number
  },
};

const Td = ({ children, style }: PropsType) => (
  <div
    style={style}
    className="table__td"
  >
    { children }
  </div>
);

export default Td;
