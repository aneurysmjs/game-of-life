// @flow strict
import React from 'react';
import type { Node } from 'react';
type PropsType = {
  children: Node
};

export const Tr = (props: PropsType) => (
  <div className="table__tr">
    { props.children }
  </div>
);

export default Tr;