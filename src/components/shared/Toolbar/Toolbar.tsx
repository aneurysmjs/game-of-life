import { type FunctionComponent } from 'react';
import Select, { type SelectedType } from '@/components/shared/Select';

type ButtonType = {
  id: string;
  text: string;
  type: string;
};

type ToolbarProps = {
  onClick: (type: string) => void;
  onSize: (selected: SelectedType) => void;
};

const buttons: ButtonType[] = [
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
  },
];

const options: { id: string; text: string; value: number }[] = [
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

const Toolbar: FunctionComponent<ToolbarProps> = ({ onClick, onSize }) => {
  const handleSelect = (option: SelectedType) => {
    onSize(option);
  };

  return (
    <nav className="flex justify-center my-4">
      {buttons.map(({ text, id, type }) => (
        <button
          className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold  text-theme shadow-sm hover:bg-white/20"
          key={id}
          onClick={() => onClick(type)}
        >
          {text}
        </button>
      ))}

      <Select buttonText="Dimension" options={options} onSelect={handleSelect} />
    </nav>
  );
};

export default Toolbar;
