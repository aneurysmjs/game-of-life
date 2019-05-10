// @flow strict
import React, { createContext } from 'react';

export type SelectedType = { id: string, i: number, j: number };
type AppContextType = {
  handle: (SelectedType) => SelectedType;
};

export default createContext<AppContextType>({
  handle: ({id, i, j}) => ({ id, i, j })
});
