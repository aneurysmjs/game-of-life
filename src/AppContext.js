// @flow strict
import React, { createContext } from 'react';

export type SelectedType = { col: number, row: number };
type AppContextType = {
  handle: (SelectedType) => SelectedType;
};

export default createContext<AppContextType>({
  handle: ({ col, row }) => ({ col, row })
});
