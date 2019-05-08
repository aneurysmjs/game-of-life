// @flow strict
import React, { useState } from 'react';

import './Toolbar.scss';

type ButtonType = {
  id: string,
  text: string,
  handle: <T>(T) => void
};

const buttons: Array<ButtonType> = [
  {
    id: '0',
    text: 'Pause',
    handle() {}
  },
  {
    id: '1',
    text: 'Resume',
    handle() {}
  }
];

function Toolbar() {
  return (
    <nav className="toolbar">
      {buttons.map(({ text, id, handle}) => (
        <button
          className="btn btn-primary ml-3"
          key={id}
          onClick={handle}
        >
          {text}
        </button>
      ))}
    </nav>
  );
}

export default Toolbar;
