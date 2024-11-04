import { useState, useEffect, FC } from 'react';

export type SelectedType = {
  id: string;
  text: string;
  value: any;
};

type PropsType = {
  options: Array<SelectedType>;
  onSelect: (selected: SelectedType) => void;
  buttonText: string;
};

const Select: FC<PropsType> = ({ options, onSelect, buttonText = 'Select' }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SelectedType | undefined>(undefined);

  const handleClick = (option: SelectedType): void => {
    onSelect(option);
    setSelected(option);
    toggle();
  };

  const toggle = (): void => {
    setOpen(!open);
  };

  const handle = (evt: Event): void => {
    let { target } = evt; // clicked element
    if (open && target && !isItem(target)) {
      setOpen(false);
    }
  };

  const isItem = (el: EventTarget): boolean | void => {
    if (el instanceof HTMLButtonElement) {
      el.classList.contains('dropdown-item');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handle);

    return () => {
      document.removeEventListener('click', handle);
    };
  });

  return (
    <div className="select">
      <button
        className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold  text-theme shadow-sm hover:bg-white/20"
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => toggle()}
      >
        {selected ? selected.text : buttonText}
      </button>
      <div className={`${open ? 'block' : 'hidden'}`}>
        {options.map((option) => (
          <button
            type="button"
            className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold  text-theme shadow-sm hover:bg-white/20"
            key={option.id}
            onClick={() => handleClick(option)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Select;
