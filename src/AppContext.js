// @flow strict
import React, { createContext } from 'react';

type SelectedTyped = { id: string, i: number, j: number };

type AppContextType = {
  handle: (SelectedTyped) => SelectedTyped;
};

export default createContext<AppContextType>({
  handle: ({id, i, j}) => ({ id, i, j })
});
