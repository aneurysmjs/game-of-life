
import  { useState } from 'react';

import { Select } from '@/components/shared/Select';

import './Toolbar.css';
type ButtonType = {
  id: string,
  text: string,
  type: string,
};

type PropsType = {
  onClick: (string) => void,
  onSize: ({id: string, text: string, value: any}) => void
};

const buttons: Array<ButtonType> = [
  {
    id: '0',
    text: 'Play',
    type: 'play',
  },
  {
    id: '1',
    text: 'Pause',
    type: 'pause',
  },
  {
    id: '2',
    text: 'Stop',
    type: 'stop',
  },
  {
    id: '3',
    text: 'Spawn',
    type: 'spawnGrid',
  }
];

const options: Array<{id: string, text: string, value: number}> = [
  {
    id: '0',
    text: '10x10',
    value: 400,
  },
  {
    id: '1',
    text: '20x20',
    value: 800,
  },
  {
    id: '2',
    text: '30x30',
    value: 1200,
  },
];

function Toolbar({ onClick, onSize }: PropsType) {

  const handleSelect = (option) => {
    onSize(option);
  };

  return (
    <nav className="toolbar">
      {buttons.map(({ text, id, type }) => (
        <button
          className="btn btn-primary mr-3"
          key={id}
          onClick={() => onClick(type)}
        >
          {text}
        </button>
      ))}

      <Select
        buttonText="Dimension"
        options={options}
        onSelect={handleSelect}
      />

    </nav>
  );
}

export default Toolbar;
