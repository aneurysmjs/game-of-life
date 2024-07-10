import type { ReactNode } from 'react';

type PropsType = {
  children: ReactNode
};

export const Tr = (props: PropsType) => (
  <div className="table__tr">
    { props.children }
  </div>
);

export default Tr;